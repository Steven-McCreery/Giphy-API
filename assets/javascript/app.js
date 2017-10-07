

$("#button").on("click", function(){
	event.preventDefault();
	newButton();
})

$("img").on("click", function(){
	event.preventDefault();
	newButton();
})




var tvShows = [ {currentTopic: false}, {items: ["Simpsons", "Family Guy", "30 Rock", "Better Off Ted"]}];


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
