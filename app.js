window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

  key.classList.add("playing");

  const keys = document.querySelectorAll(".key");

  function removeTransition(e) {
    this.classList.remove("playing")
  }

  // transition end calling on click
  keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition);
  });
});
