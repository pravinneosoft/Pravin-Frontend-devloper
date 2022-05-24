var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "STOP A TRIBUTE";
  
  } else {
    video.pause();
    btn.innerHTML = "START A TRIBUTE";
  }
}