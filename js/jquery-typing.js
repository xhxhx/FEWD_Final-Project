$(document).ready(function(){

    $(document).keypress(function(e){

            if (e.which >= 97 && e.which <= 122) {
                        //Lowercase Alpha
			animateLetter(String.fromCharCode(e.which));
			

		}
		else if(e.which == 32){
      //Spacebar
			$(".space-alert").show()
				.animate({opacity: 1.0}, 400)
				.fadeOut(400);
		}

    });

// audio sounds
  var player = document.getElementById("note-a");

  var getCommand = function(pressedChar){
    var command = null;
    if(keyIsDown){
    switch(pressedChar) {
    case 'a':
        //alert("I'm A.");
        if(q){
        //alert("I'm A.");
        player.setAttribute("src","audio/68437__pinkyfinger__piano-a.wav");
        player.play();
        q = false;  
        }else{
            command =null;
            console.log("q is holded"); // if the keyboard is pressed before it will be here. 
        }
        break;

    // case 'b':
    //     player.setAttribute("src","2fart-05 D7.mp3");
    //     player.play();
    //   break;
    // case 'c':
    //   player.setAttribute("src","3fart-01 E7.mp3");
    //     player.play();
    //   break;
    // case 'd':
    //  player.setAttribute("src","4fart-03 F7.mp3");
    //     player.play();
    //   break;
    //   case 'e':
    //  player.setAttribute("src","5fart Na G7.mp3");
    //     player.play();
    //   break;
    // case 'f':
    //   player.setAttribute("src","6fart Na A7.mp3");
    //     player.play();
    //   break;
    // case 'g':
    //  player.setAttribute("src","7fart Na B7.mp3");
    //     player.play();
    //   break;
    //    case 'h':
    //  player.setAttribute("src","fart-07 C8.mp3");
    //     player.play();
    //   break;
    //    default:
    //     alert("OUT");
    //     break;
    }
    return command;
    }else{
        command = null;
    }
    };

  $(document).keyup(function(e){
      console.log("One of the keys is up");
      var code = e.keyCode || e.which;
      var pressedChar = String.fromCharCode(code).toLowerCase();
      switch(pressedChar) {
      case'q': q=true;
          break;
  default:
      console.log("Nothing");
      }
  });


//Animates pressed key's block
    function animateLetter(letter){
        $(".letter-" + letter).stop(true,false).animate({top:'50px'},{easing: 'easeInBack', duration:500}).animate({opacity: 1.0}, 300).animate({top:'0px'},{duration:500});

    }

});
