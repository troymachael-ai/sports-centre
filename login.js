document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let message = "";

  if (email === "" || password === "") {
    message = "Please enter both email and password.";
  } else {
   
    if (email === "test@example.com" && password === "123456") {
      message = "Login successful! Welcome back.";
    } else {
      message = "Invalid email or password.";
    }
  }

  document.getElementById("loginMessage").textContent = message;
});
