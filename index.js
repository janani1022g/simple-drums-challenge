var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var innerLetter = this.innerHTML; 
    makeSound(innerLetter);

    buttonAnimation(innerLetter);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;
    case "w":
      var tom2 = new Audio("sounds/kick-bass.mp3");
      tom2.play();
      break;
    case "e":
      var tom3 = new Audio("sounds/snare.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-1.mp3");
      tom4.play();
      break;
    case "i":
      var tom5 = new Audio("sounds/tom-2.mp3");
      tom5.play();
      break;
    case "u":
      var tom6 = new Audio("sounds/tom-3.mp3");
      tom6.play();
      break;
    case "g":
      var tom7 = new Audio("sounds/tom-4.mp3");
      tom7.play();
      break;

    default:
      console.log("Key not assigned: " + key);
      break;
  }
}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("."+currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {

    activeButton.classList.remove("pressed");}, 100);

}
