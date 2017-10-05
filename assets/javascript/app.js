// $(document).ready(function(){
// 	$(".dropdown").on("hide.bs.dropdown", function(){
// 		$(".btn").html('Dropdown <span class="caret"></span>');
// 	});
// 	$(".dropdown").on("show.bs.dropdown", function(){
// 		$(".btn").html('Dropdown <span class="caret caret-up"></span>');
// 	});
	// $(".dropdown-toggle").dropdown("toggle");
// });

$("#button").on("click", function(){
	event.preventDefault();
	newButton();
})

$("#topic").on("click", function(){
	event.preventDefault();
	newTopic();
})

// var topics = [
// 	{topic1: "topic",
// 	subtopic1: "subtopic",
// 	subtopic2: {sub21 : "subsub1",
// 		sub22: "subsub2"},
// 	},
// 	{topic2: "topic2",
// 	subtopic1: "subtopic",
// 	subtopic2: {sub21 : {subsubsub1: "subsub1",
// 				subsubsub2: "subsub2"},
// 		sub22: "subsub2"},
// 	},
// ]


var tvShows = [	"Simpsons", "Family Guy", "30 Rock", "Better Off Ted"]

console.log(tvShows);


// console.log(topics);

newButton = function() {
	var b = $("<button>");
	b.text($("#textToSearch").val().trim());
	// $("#textToSearch").val().trim();
	$("")

}

// newTopic = function() {
// 	$("")
// }






