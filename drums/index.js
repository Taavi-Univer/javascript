let buttonsArr = document.querySelectorAll(".drum");
// console.log(buttonsArr);

// function handleClick() {}

// buttonsArr.forEach((element) => {
//     element.addEventListener("click", handleClick);
// });

function playSound(char) {
  switch (char) {
    case "w":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(char);
  }
}

for (let i = 0; i < buttonsArr.length; i++) {
  buttonsArr[i].addEventListener("click", function () {
    let caseOf = this.innerHTML;

    playSound(caseOf);
    addAnimation(caseOf);
  });
}

document.addEventListener("keydown", function (e) {
  playSound(e.key);
  addAnimation(e.key);
});

function addAnimation(key) {
  const btn = document.querySelector("." + key);
  btn.classList.add("pressed");
  setTimeout(() => {
    btn.classList.remove("pressed");
  }, 100);
}
