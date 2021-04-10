//create random chuck norris joke app
// send a get req to https://api.chucknorris.io/jokes/random will result in a random chuck norris joke being sent to you!
// add button that fetches brand new random joke
let h2 = document.querySelector("h2");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      h2.textContent = `${data.value}`;
    });
});
