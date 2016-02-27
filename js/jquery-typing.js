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

//Animates pressed key's block
    function animateLetter(letter){
        $(".letter-" + letter).stop(true,false).animate({top:'150px'},{easing: 'easeInBack', duration:700}).animate({opacity: 1.0}, 300).animate({top:'0px'},{duration:500});
       
    }
});
