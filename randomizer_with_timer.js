// JavaScript Image Randomizer with Timer by GitHub user susaluda
// Licensed under MIT License
// Required actions to customize code are commented in caps
// Examples of required actions are contained in comments above the line with a required action

var timerID = setInterval("document.getElementById('imgChange').src = imageChange();", 5000); //Interval timer changes image every 5 seconds

function imageChange() {
	// Example: var random_images = ['cat.jpg', 'dog.jpg', 'duck.jpg', 'rabbit.jpg'];
	var random_images = []; // PLACE IMAGE FILE NAMES IN ARRAY	
	var num = Math.floor( Math.random() * random_images.length );
    var img = random_images[ num ];
    imgSrc = 'images/' + img; // UPDATE IMAGE FILE PATH
	return(imgSrc);
} // end function imageChange

function stopTimer() { // To be used with an HTML button such as: <p><span onclick="stopTimer()" id="button">Stop Slideshow</span></p>
		clearInterval(timerID);
}
