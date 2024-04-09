// const 

const drumBtn = document.querySelectorAll(".set .drum");
for (let i = 0; i < drumBtn.length; i++) {
  drumBtn[i].addEventListener("click", function () {
    const FirstClassName = this.classList.value[0];
    makeSound(FirstClassName);
    
  });
}


document.addEventListener('keypress', function(event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case 's':
    case '3':
      let sound1 = new Audio("./tom-3.mp3");
      sound1.play();
      break;
    case 'd':
    case '1':
      let sound2 = new Audio("./tom-4.mp3");
      sound2.play();
      break;
    case 'w':
    case '6':
      let sound3 = new Audio("./tom-1.mp3");
      sound3.play();
      break;
    case 'k':
    case '5':
      let sound4 = new Audio("./kick-bass.mp3");
      sound4.play();
      break;
    case 'a':
    case '4':
      let sound5 = new Audio("./tom-2.mp3");
      sound5.play();
      break;
    case 'j':
    case '2':
      let sound6 = new Audio("./snare.mp3");
      sound6.play();
      break;
    case 'c':
    case '0':
      let sound7 = new Audio("./crash.mp3");
      sound7.play();
      break;
    default:
      console.log("Invalid key");
  }
}
