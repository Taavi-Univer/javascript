let heading = document.querySelector("h1");
let refresh = document.getElementById("refresh");

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

document
  .querySelector(".img1")
  // .setAttribute("src", "images/dice" + randomNumber + ".png");
  .setAttribute("src", `images/dice${randomNumber1}.png`);

document
  .querySelector(".img2")
  // .setAttribute("src", "images/dice" + randomNumber + ".png");
  .setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "Player 1 wins";
  refresh.innerHTML = "refresh page";
} else if (randomNumber1 < randomNumber2) {
  heading.innerHTML = "Player 2 wins";
  refresh.innerHTML = "refresh page";
} else {
  heading.innerHTML = "Draw";
  refresh.innerHTML = "refresh page";
}
