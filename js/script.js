var frontButton = document.getElementById("leftbut");
var backButton = document.getElementById("rightbut");
var frontEnd = document.getElementsByClassName("frontEndButton");
var backEnd = document.getElementsByClassName("backEndButton");
var php = document.getElementById("php");
var bootstrap = document.getElementById("boot");




var i = 0;
var txt = "You've reached the portfolio website of John Gill! I'm a 29 year old web developer proficient in both front end and back end technologies as well as 2D game development. See below for links and skills or check the navbar to contact me or for examples of my work!";
var speed = 25; /* The speed/duration of the effect in milliseconds */
$(document).ready( function() {
	typeWriter();
	$(frontButton).click(function(){
		if ($(php).css('display') == "none") {
			$(frontEnd).toggle();
		} else {
			$(backEnd).toggle();
		}

	})
	$(backButton).click(function() {
		if ($(bootstrap).css('display') == "none") {
			$(backEnd).toggle();
		} else {
			$(frontEnd).toggle();
		}
	})

	
});
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
