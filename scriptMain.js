// load Youtube API code asynchronously
var tag = document.createElement('script')

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

var player // variable to hold new YT.Player() instance

// define onYouTubeIframeAPIReady() function and initialize a Youtube video player when the API has loaded 
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '00',
		width: '00',
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

function play(){
	 player.seekTo(0); 
	alert('To enjoy the game in the highest level of fun, put the headphones and the volume in 70% or more!');
  if (confirm("Do you have the headphones? ARE YOU READY?")) {
    player.playVideo()
    window.open("https://storage.googleapis.com/files.gamefroot.com/users/2411842/games/121198/gamefroot-2019-0-8T19-55-21.913Z/index.html");
  } 
  else {
	  player.stopVideo();
  }
}
