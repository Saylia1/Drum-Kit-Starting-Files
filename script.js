// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// for (var i = 0; i<numberOfDrumButtons; i++){

//     document.querySelectorAll(".drum")[0].addEventListener("click",function() {
//           console.log(this.style.color="blue");
//            var audio = new Audio('sounds/tom-1.mp3');
//             audio.play();
//              });
//       document.querySelectorAll(".drum")[1].addEventListener("click",function() {
//           console.log(this.style.color="grey");
//            var audio = new Audio('sounds/tom-2.mp3');
//              audio.play();
//               });
//     document.querySelectorAll(".drum")[2].addEventListener("click",function() {
//           console.log(this.style.color="green");
//            var audio = new Audio('sounds/tom-3.mp3');
//              audio.play();
//               });
//     document.querySelectorAll(".drum")[3].addEventListener("click",function() {
//           console.log(this.style.color="red");
//            var audio = new Audio('sounds/tom-4.mp3');
//             audio.play();
//              });
//     document.querySelectorAll(".drum")[4].addEventListener("click",function() {
//           console.log(this.style.color="purple");
//            var audio = new Audio('sounds/snare.mp3');
//             audio.play();
//              });
//      document.querySelectorAll(".drum")[5].addEventListener("click",function() {
//           console.log(this.style.color="gold");
//             var audio = new Audio('sounds/crash.mp3');
//               audio.play();
//                });
//     document.querySelectorAll(".drum")[6].addEventListener("click",function() {
//            console.log(this.style.color="brown");
//              var audio = new Audio('sounds/kick-bass.mp3');
//               audio.play();
//                });
//     }
 

    // var audio = new Audio('audio_file.mp3');
    // audio.play();

    //2nd code

    // var numberOfDrumButtons = document.querySelectorAll(".drum").length;
    // for (var i = 0; i<numberOfDrumButtons; i++){
    //   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
    //     var buttonInnerHTML = this.innerHTML;

    //     switch(buttonInnerHTML){
    //       case "w":
    //         var tom1 = new Audio('sounds/tom-1.mp3');
    //         tom1.play();
    //         break;
    //       case "a":
    //         var tom2 = new Audio('sounds/tom-2.mp3');
    //         tom2.play();
    //         break;

    //       case "s":
    //         var tom3 = new Audio('sounds/tom-3.mp3');
    //         tom3.play();
    //         break;

    //       case "d":
    //         var tom4 = new Audio('sounds/tom-4.mp3');
    //         tom4.play();
    //         break;

    //       case "j":
    //         var tom5 = new Audio('sounds/snare.mp3');
    //         tom5.play();
    //         break;

    //       case "k":
    //         var tom6 = new Audio('sounds/crash.mp3');
    //         tom6.play();
    //         break;

    //       case "l":
    //         var tom7 =  new Audio('sounds/kick-bass.mp3');
    //         tom7.play();
    //         break;

    //         default: console.log(buttonInnerHTML);
    //     }
    //   });
    // }

    // document.addEventListener("keypress",function(even){
    //   console.log(Event);
    //  alert("key was pressed!");
    // });

    //Detection button press
    var numberOfDrumButtons = document.querySelectorAll(".drum").length;
    for (var i = 0; i<numberOfDrumButtons; i++){
      document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
      });
    } 
    //Detection keyboard press 
    document.addEventListener("keypress",function(even){
      makeSound(event.key)
      buttonAnimation(event.key);
      // console.log(Event);
    });
    function makeSound(key){
      switch(key){
        case "w":
          var tom1 = new Audio('sounds/tom-1.mp3');
          tom1.play();
          break;
        case "a":
          var tom2 = new Audio('sounds/tom-2.mp3');
          tom2.play();
          break;

        case "s":
          var tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();
          break;

        case "d":
          var tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
          break;

        case "j":
          var tom5 = new Audio('sounds/snare.mp3');
          tom5.play();
          break;

        case "k":
          var tom6 = new Audio('sounds/crash.mp3');
          tom6.play();
          break;

        case "l":
          var tom7 =  new Audio('sounds/kick-bass.mp3');
          tom7.play();
          break;

          default: console.log(buttonInnerHTML);
      }
    }

    function buttonAnimation(currentKey){
      var activeButton = document.querySelector("."+currentKey);
      activeButton.classList.add("pressed");
      setTimeout(function(){
        activeButton.classList.remove("pressed");
      }, 100);
    }
    
  

    