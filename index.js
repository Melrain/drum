// var buttonList = document.querySelectorAll(".drum");

// var audioList = [
//   new Audio("sounds/tom-1.mp3"),
//   new Audio("sounds/tom-2.mp3"),
//   new Audio("sounds/tom-3.mp3"),
//   new Audio("sounds/tom-4.mp3"),
//   new Audio("sounds/crash.mp3"),
//   new Audio("sounds/kick-bass.mp3"),
//   new Audio("sounds/snare.mp3"),
// ];

// document.addEventListener("keydown", MakeSound);

// for (let index = 0; index < buttonList.length; index++) {
//   buttonList[index].addEventListener("click", function () {
//     audioList[index].play();
//   });
// }

// function MakeSound(e){
//     switch (e.key) {
//         case "w":
//           audioList[0].play();
//           break;

//         case "a":
//           audioList[1].play();
//           break;

//         case "s":
//           audioList[2].play();
//           break;

//         case "d":
//           audioList[3].play();
//           break;
//         case "j":
//           audioList[4].play();
//           break;
//         case "k":
//           audioList[5].play();
//           break;
//         case "l":
//           audioList[6].play();
//           break;
//       }
// }

var numberOfButtons = document.querySelectorAll(".drum").length;
var buttonClassListAll = document.querySelectorAll(".drum").classList;

document.addEventListener("keydown",makeSound);



// 鼠标
for (let index = 0; index < numberOfButtons; index++) {document.querySelectorAll(".drum")[index].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);
    });
}

// 键盘
document.addEventListener("keydown",(event)=>{
    makeSound(event.key);

    buttonAnimation(event.key);
});

// 播放声音函数
function makeSound(key){
  
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      

      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();

      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();

      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();

      break;

    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();

      break;

    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();

      break;

    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();

      break;
    default:
      break;
  }
}

// 播放动画函数
function buttonAnimation(currentKey){
  clearTimeout();
  var activeButton= document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
