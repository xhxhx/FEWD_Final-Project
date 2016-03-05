$(document).ready(function() {  

	var player = $("#note")[0];
	console.log("player", player);

  $(document).keypress(function(e) {

    if (e.which >= 97 && e.which <= 122) {
      //Lowercase Alpha
      animateLetter(String.fromCharCode(e.which));

    } else if (e.which == 32) {
      //Spacebar
      $(".space-alert").show()
        .animate({
          opacity: 1.0
        }, 400)
        .fadeOut(400);
    }
  });

  $(document).keyup(function(e) {
    console.log("One of the keys is up");

    var code = e.keyCode || e.which;
    var pressedChar = String.fromCharCode(code).toLowerCase();
    switch (pressedChar) {
      case 'a':
				// console.log("A was pressed")
				player.setAttribute("src", "./audio/piano-a-note.wav");
				player.play();
        break;
			case 'b':
				player.setAttribute("src", "./audio/piano-b-note.wav");
				player.play();
				break;
			case 'c':
				player.setAttribute("src", "./audio/piano-c-note.wav");
				player.play();
				break;
			case 'd':
				player.setAttribute("src", "./audio/piano-d-note.wav");
				player.play();
				break;
			case 'e':
				player.setAttribute("src", "./audio/piano-e-note.wav");
				player.play();
				break;
			case 'f':
				player.setAttribute("src", "./audio/piano-f-note.wav");
				player.play();
				break;
			case 'g':
				player.setAttribute("src", "./audio/piano-g-note.wav");
				player.play();
				break;
			case 'h':
				player.setAttribute("src", "./audio/piano-a-note.wav");
				player.play();
				break;
			case 'i':
				player.setAttribute("src", "./audio/piano-b-note.wav");
				player.play();
				break;
			case 'j':
				player.setAttribute("src", "./audio/piano-c-note.wav");
				player.play();
				break;
			case 'k':
				player.setAttribute("src", "./audio/piano-d-note.wav");
				player.play();
				break;
			case 'l':
				player.setAttribute("src", "./audio/piano-e-note.wav");
				player.play();
				break;
			case 'm':
				player.setAttribute("src", "./audio/piano-f-note.wav");
				player.play();
				break;
			case 'n':
				player.setAttribute("src", "./audio/piano-g-note.wav");
				player.play();
				break;
			case 'o':
				player.setAttribute("src", "./audio/piano-a-note.wav");
				player.play();
				break;
			case 'p':
				player.setAttribute("src", "./audio/piano-b-note.wav");
				player.play();
				break;
			case 'q':
				player.setAttribute("src", "./audio/piano-c-note.wav");
				player.play();
				break;
			case 'r':
				player.setAttribute("src", "./audio/piano-d-note.wav");
				player.play();
				break;
			case 's':
				player.setAttribute("src", "./audio/piano-e-note.wav");
				player.play();
				break;
			case 't':
				player.setAttribute("src", "./audio/piano-f-note.wav");
				player.play();
				break;
			case 'u':
				player.setAttribute("src", "./audio/piano-g-note.wav");
				player.play();
				break;
			case 'v':
				player.setAttribute("src", "./audio/piano-a-note.wav");
				player.play();
				break;
			case 'w':
				player.setAttribute("src", "./audio/piano-b-note.wav");
				player.play();
				break;
			case 'x':
				player.setAttribute("src", "./audio/piano-c-note.wav");
				player.play();
				break;
			case 'y':
				player.setAttribute("src", "./audio/piano-d-note.wav");
				player.play();
				break;
			case 'z':
				player.setAttribute("src", "./audio/piano-e-note.wav");
				player.play();
				break;

      default:
        console.log("Nothing");
    }
  });


  //Animates pressed key's block
  function animateLetter(letter) {
    $(".letter-" + letter).stop(true, false).animate({
      top: '50px'
    }, {
      easing: 'easeInBack',
      duration: 500
    }).animate({
      opacity: 1.0
    }, 300).animate({
      top: '0px'
    }, {
      duration: 500
    });

  }

});
