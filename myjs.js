// load Youtube API code asynchronously
var tag = document.createElement('script')

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

var player // variable to hold new YT.Player() instance

// define onYouTubeIframeAPIReady() function and initialize a Youtube video player when the API has loaded 
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '600',
		width: '600',
		playerVars: {autoplay:1, loop:1, start:0},
		videoId: 'lUo89xBQH4I',
		events: {
			'onReady': function(event){},
			'onStateChange': function(event){}
		}
	})
}

//Uncomment below in Chrome when re-running code inside Editor for changes to be applied:
//onYouTubeIframeAPIReady()



function myFunction() {
	setTimeout(function(){ 
window.open("intro.html", "_self"); }, 2000);
}

