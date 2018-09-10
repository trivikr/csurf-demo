const express = require("express");
const bodyParser = require("body-parser");
const csurf = require("csurf");
const cookieParser = require("cookie-parser");

const PORT = 3001;
const app = express();

const csrfMiddleware = csurf({
  cookie: true
});

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cookieParser());
app.use(csrfMiddleware);

app.get("/", (req, res) => {
  res.send(`
    <form action="http://localhost:3000/entry" method="POST">
      <div>
        <label for="message">Enter a message</label>
        <input id="message" name="message" type="text" />
      </div>
      <input type="submit" value="Submit" />
      <input type="hidden" name="_csrf" value="${req.csrfToken()}" />
    </form>
  `);
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Attacker listening on http://127.0.0.1:${PORT}`);
});
