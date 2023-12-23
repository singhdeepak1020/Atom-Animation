
var btn = document.querySelector('.btn');
const audio = new Audio("./Interstellar Main Theme - Hans Zimmer.mp3");
audio.loop = true;

btn.addEventListener("click", (e) => {
    audio.paused ? audio.play() : audio.pause();
    audio.paused ? btn.style.textDecoration = "line-through" : btn.style.textDecoration = "none";
});
