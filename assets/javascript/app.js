$(document).ready(function() {

	drawButtons();

	$("#button").on("click", function(){
		event.preventDefault();
		newButton();
	})

	$(".buttons").on("click", "img", function(){
		event.preventDefault();
		animateToggle();
	})



	var tvShows = ["I'ts Always Sunny in Philadelphia", "Simpsons", "30 Rock", "Family Guy", "House of Cards", "Better Off Ted", "Monty Python", "The Blacklist"];

	console.log(tvShows);


	// console.log(topics);

	newButton = function() {

		$tvShows.push($("#textToSearch").val().trim());

		$("#textToSearch").val("");

		drawButtons();

		console.log(tvShows);
	}

	drawButtons = function() {
		
		for (var i = 0; i < currentTopic.length; i++) {

			var b = $("<button>");
			b.text($("#textToSearch").val().trim());
			b.attr("alt", "clickable image of " + currentTopic[i]);
			$(".images").append(currentTopic[i]);
			
		}
	}


	console.log($.now());
})