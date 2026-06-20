document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let message = "";

  if (name === "" || email === "" || password === "") {
    message = "All fields are required!";
  } else if (password.length < 6) {
    message = "Password must be at least 6 characters long.";
  } else {
    message = "Signup successful! Welcome, " + name + ".";
  }

  document.getElementById("message").textContent = message;
});
