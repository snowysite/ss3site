JavaScript (script.js);
javascript
document.getElementById('signin-button').addEventListener('click', signIn);

function signIn() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // You can add your own logic to validate the credentials and redirect the user to the quiz page.
  // Below is a simple example where the user is redirected if both username and password are non-empty.
  if (username !== "" && password !== "") {
    window.location.href = "index.html";
  }
}