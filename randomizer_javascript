// JavaScript Image Randomizer by GitHub user susaluda
// Licensed under MIT License
// Required actions to customize code are commented in caps
// Examples of required actions are contained in comments above the line with a required action

// Example: var random_images_array = ['cat.jpg', 'dog.jpg', 'duck.jpg', 'rabbit.jpg'];
var random_images_array = []; // PLACE IMAGE FILE NAMES IN ARRAY

function getRandomImage(imgArray, path) {
// Example: filepath = filepath || 'images/home_page_images/';
	filepath = filepath || ''; // ENTER YOUR IMAGE PATH
	var num = Math.floor( Math.random() * imgArray.length ); //image randomizer
	var img = imgArray[ num ];
	var imgString = '<img src="' + filepath + img + '" alt = "">';
	document.write(imgString); document.close();
}
