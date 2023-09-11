const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  const location = search.value;

  async function display() {
    try {
      await fetch(
        "/weather/?address=" + location
        // "https://weatherapp-xh2h.onrender.com/weather/?address=" + location
        // "http://localhost:3000/weather/?address=" + location
      ).then((res) => {
        res.json().then((data) => {
          if (data.error) {
            messageOne.textContent = data.error;
          } else {
            messageOne.textContent = data.place;
            messageTwo.textContent = data.forecast;
          }
        });
      });
    } catch (error) {
      messageOne.textContent = "Your internet connection is broken";
    }
  }
  display();
});
