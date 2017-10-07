

$("#button").on("click", function(){
	event.preventDefault();
	newButton();
})

$(".buttons").on("click", function(){
	event.preventDefault();
	getImages();
})

$("img").on("click", function(){
	event.preventDefault();
	animateToggle();
})



var tvShows = ["I'ts Always Sunny in Philadelphia", "Simpsons", "30 Rock", "Family Guy", "House of Cards", "Better Off Ted", "Monty Python", "The Blacklist"];

console.log(tvShows);


// console.log(topics);

newButton = function() {

	$("#textToSearch").val().trim();


	for (var i = 0; i < currentTopic.length; i++) {

		var b = $("<button>");
		b.text($("#textToSearch").val().trim());
		b.attr("alt", "clickable image of " + currentTopic[i]);
		$(".images").append(currentTopic[i]);
		
	}

}




console.log($.now());
