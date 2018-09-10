const express = require("express");
const bodyParser = require("body-parser");
const csurf = require("csurf");
const cookieParser = require("cookie-parser");

const PORT = 3000;
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
    <form action="/entry" method="POST">
      <div>
        <label for="message">Enter a message</label>
        <input id="message" name="message" type="text" />
      </div>
      <input type="submit" value="Submit" />
      <input type="hidden" name="_csrf" value="${req.csrfToken()}" />
    </form>
  `);
});

app.post("/entry", (req, res) => {
  console.log(`Message received: ${req.body.message}`);
  res.send(
    `CSRF token used: ${req.body._csrf}, Message received: ${req.body.message}`
  );
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
