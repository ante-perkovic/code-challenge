const form = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!isEmailValid(email.value)) {
    alert("Please enter a valid email address!");
    return;
  }
  if (password.value.length < 6) {
    alert("Password must be at least 6 characters long!");
    return;
  }

  fetch("/login", {
    method: "POST",
    body: JSON.stringify({ email: email.value, password: password.value }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const token = data.token;
      console.log("kurčna", token);
      //token logic
      alert("Login successful!");
    })
    .catch((error) => alert(error.message));
});

function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
