# csurf-demo
Demo of protecting against CSRF attack using csurf exress plugin 

Steps to reproduce:
* Run `npm install` to install dependencies
* Run `npm start` to run both server and attacker
* Confirm that both server and attacker are running as the following log is printed:
  ```
  Listening on http://localhost:3000
  Attacker listening on http://127.0.0.1:3001
  ```
* Allowed process:
  * Visit server form at [http://localhost:3000](http://localhost:3000), enter a message and click Submit button
  ![Form submit](screenshots/form-submit.png?raw=true "Form submit")
  * On submit, the CSRF token and message will be displayed.
  ![Form submit success](screenshots/form-submit-success.png?raw=true "Form submit success") 
* CSRF attack (blocked):
  * Visit server form at [http://127.0.0.1:3001](http://127.0.0.1:3001), enter a message and click Submit button
  ![CSRF Attack](screenshots/csrf-attack.png?raw=true "CSRF attack")
  * On submit, "invalid CSRF token" error will be thrown.
  ![CSRF Attack failure](screenshots/csrf-attack-failure.png?raw=true "CSRF attack failure")