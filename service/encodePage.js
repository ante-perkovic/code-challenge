const form = document.getElementById("encode-form");

const text = document.getElementById("text");
const encodedDiv = document.getElementById("encoded");

const token = localStorage.getItem("token");

const authHeaders = {
  "Content-Type": "application/json",
  authorization: `${token}`,
};

form
  .addEventListener("submit", (event) => {
    event.preventDefault();

    fetch("/encode", {
      method: "POST",
      body: JSON.stringify({ text: text.value }),
      headers: authHeaders,
    })
      .then((response) => {
        if (response.status === 401) {
          window.location.href = "/login";
        } else {
          return response.json();
        }
      })
      .then((data) => {
        encodedDiv.textContent = data.text;
      });
  })
  .catch((error) => console.error(error));
