let progress=document.getElementById("progress");
let song =document.getElementById("song");
let ctrlbtn =document.getElementById("ctrlbtn");
song.onloadedmetadata=function(){
  progress.max=song.duration;
  progress.value=song.currentTime;
}

function playPause(){
  if(ctrlbtn.classList.contains("fa-pause")){
    song.pause();
    ctrlbtn.classList.remove("fa-pause");
    ctrlbtn.classList.add("fa-play");
  }
  else {
    song.play();
    ctrlbtn.classList.add("fa-pause");
    ctrlbtn.classList.remove("fa-play");
  }
}

song.addEventListener("play", function() {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
});

progress.onchange=function(){
  song.play();
  song.currentTime = progress.value;
  ctrlbtn.classList.add("fa-pause");
  ctrlbtn.classList.remove("fa-play");
}

