const video = document.querySelector("video");
const button = document.querySelector("button");

/* --- Browsers Support --- */
if (!document.pictureInPictureEnabled) {
  button.textContent = "Not Supported.";
  button.disabled = true;
  button.style.cursor = "not-allowed";
  button.style.opacity = "0.5";
}

// Entering Picture-in-Picture mode
video.addEventListener(
  "enterpictureinpicture",
  () => (button.textContent = "Exit PiP")
);

// Leaving Picture-in-Picture mode
video.addEventListener(
  "leavepictureinpicture",
  () => (button.textContent = "Enter PiP")
);

// Button Click
button.addEventListener("click", () =>
  document.pictureInPictureElement
    ? document.exitPictureInPicture()
    : video.requestPictureInPicture()
);
