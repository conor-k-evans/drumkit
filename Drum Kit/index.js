//Array of all drums
var drumArray = document.querySelectorAll(".drum");

//Setting all drums to make specific sound when clicked
for (var i = 0; i < drumArray.length; i++) {
  drumArray[i].addEventListener("click", function() {
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

//Setting all drums to make specific sound when certain key is pressed
document.addEventListener("keypress", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
})

//Function created to play each individual sound depending on character passed into switch statement
function playSound(keyChar) {
  switch (keyChar) {
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case 'a':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case 's':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case 'd':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case 'j':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case 'k':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case 'l':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(event.key);
  }
}

//Function to change button image when pressed
function buttonAnimation(keyChar) {
  var activeButton = document.querySelector("." + keyChar);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
