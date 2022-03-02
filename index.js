/*
for (var i = 0; i < 7; i++) {
  var myClass = document.querySelectorAll(".drum")[i]; 
  var htmlOnly = myClass.innerHTML;

  alert(document.querySelectorAll(".drum")[i].innerHTML);
  myClass.addEventListener("click", () => {;

          switch (htmlOnly) {
            case "w":
              var audio_1 = new Audio("sounds/tom-1.mp3");
              audio_1.play();
              break;
            case "a":
              var audio_2 = new Audio("sounds/tom-2.mp3");
              audio_2.play();
              break;
            case "s":
              var audio_3 = new Audio("sounds/tom-3.mp3");
              audio_3.play();
              break;
            case "d":
              var audio_4 = new Audio("sounds/tom-4.mp3");
              audio_4.play();
              break;
            case "j":
              var audio_5 = new Audio("sounds/tom-5.mp3");
              audio_5.play();
              break;
            case "k":
              var audio_6 = new Audio("sounds/tom-6.mp3");
              audio_6.play();
              break;
            case "l":
              var audio_7 = new Audio("sounds/tom-5.mp3");
              audio_7.play();
              break;
            default:
              break;
          }
      
   });
}
*/
for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var htmlOnly = this.innerHTML;
    playMe(htmlOnly)
     });

    document.addEventListener("keydown", function(event){
        playMe(event.key)
    })
  }
  

function playMe(pressed){
    switch (pressed) {
        case "w":
          var audio_1 = new Audio("sounds/tom-1.mp3");
          audio_1.play();
          break;
        case "a":
          var audio_2 = new Audio("sounds/tom-2.mp3");
          audio_2.play();
          break;
        case "s":
          var audio_3 = new Audio("sounds/tom-3.mp3");
          audio_3.play();
          break;
        case "d":
          var audio_4 = new Audio("sounds/tom-4.mp3");
          audio_4.play();
          break;
        case "j":
          var audio_5 = new Audio("sounds/tom-5.mp3");
          audio_5.play();
          break;
        case "k":
          var audio_6 = new Audio("sounds/tom-6.mp3");
          audio_6.play();
          break;
        case "l":
          var audio_7 = new Audio("sounds/tom-7.mp3");
          audio_7.play();
          break;
        default:
          break;
      }
}