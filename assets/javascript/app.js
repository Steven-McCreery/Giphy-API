$(document).ready(function() {
	

	// call new button function that also calls button drawing function
	$("#button").on("click", function(){
		event.preventDefault();
		newButton();
	})


	$(".buttons").on("click", "img", function(){
		event.preventDefault();
		getImages();
	})

	// whenever the buttons are drawn, including new elements (not present at document load) they can be listened for to toggle
	$(".images").on("click", "img", function(){
		event.preventDefault();
		animateToggle();
	})

	// array for image getting and button drawing
	var tvShows = ["I'ts Always Sunny in Philadelphia", "Simpsons", "30 Rock", "Family Guy", "House of Cards", "Better Off Ted", "Monty Python", "The Blacklist"];

	console.log(tvShows);

	newButton = function() {

		// add user's cleaned-up input to array
		tvShows.push($("#textToSearch").val().trim());

		// clear input section
		$("#textToSearch").val("");

		// call button drawing function
		drawButtons();

		console.log(tvShows);
	}

	drawButtons = function() {
		
		// clear button area before replacing buttons
		$(".buttons").empty();

		// looping through array to draw buttons
		for (var i = 0; i < tvShows.length; i++) {

			// creates blank jQuery button then adds text to button 
			var b = $("<button>");
			b.text(tvShows[i]);	
			b.addClass("tvShow");		
			$(".buttons").append(b);
		}
	}

	// draw buttons when page loads
	drawButtons();

	getImages = function() {

		// set URL for Giphly site
		var queryURL;


	}


	console.log($.now());
})