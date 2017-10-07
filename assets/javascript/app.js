$(document).ready(function() {
	

	// call new button function that also calls button drawing function
	$("#button").on("click", function(){
		event.preventDefault();
		newButton();
	})


	$(".buttons").on("click", "button", function(){
		getImages();
	})

	// whenever the buttons are drawn, including new elements (not present at document load) they can be listened for to toggle
	$(".images").on("click", "img", function(){
		event.preventDefault();
		animateToggle();
	})

	// array for image getting and button drawing
	var tvShows = ["I'ts Always Sunny in Philadelphia", "Simpsons", "30 Rock", "Game of Thrones", "House of Cards", "Better Off Ted", "Monty Python", "The Blacklist"];

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
			b.attr("data", tvShows[i]);	
			b.addClass("tvShow button btn-success");		
			$(".buttons").append(b);
			console.log(b[0].textContent);
		}
	}

	// draw buttons when page loads
	drawButtons();

	getImages = function() {

		// clear image area for new items
		$(".images").empty();

		// setting button text as a variable
		var show = $(event.target).text();
		console.log(show);

		// set URL for Giphly site
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=dc6zaTOxFJmzC&limit=10";

		// make the axaj call
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
			console.log(response);

			for (var j = 0; j < response.data.length; j++) {
				var area = $("<div id='gif'>")
				var image = $("<img>").attr("src", response.data[j].images.fixed_height_still.url);
				var ratingText = $("<p>").text("Rating: " + response.data[j].rating);

				area.append(image);
				area.append(ratingText);
				$(".images").prepend(area);
			}
		})


	}


	console.log($.now());
})