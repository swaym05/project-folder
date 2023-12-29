// Change Background Color
const mainBckground = document.getElementById("outerBox");

colorSelector.addEventListener("change", function () {
  if (colorSelector.value == "one") {
    colorSelector.style.background = `linear-gradient(135deg,#1CB5E0,#0e0ea9)`;
    mainBckground.style.backgroundImage = `linear-gradient(135deg,#1CB5E0,#0e0ea9)`;
  }
  if (colorSelector.value == "two") {
    colorSelector.style.background = `linear-gradient(135deg,#00b09b, #96c93d)`;
    mainBckground.style.backgroundImage = `linear-gradient(135deg,#00b09b, #96c93d)`;
  }
  if (colorSelector.value == "three") {
    colorSelector.style.background = `linear-gradient(135deg,#f7b733,#fc4a1a)`;
    mainBckground.style.backgroundImage = `linear-gradient(135deg,#f7b733,#fc4a1a)`;
  }
  if (colorSelector.value == "four") {
    colorSelector.style.background = `linear-gradient(140deg,#ee0979, #ff6a00)`;
    mainBckground.style.backgroundImage = `linear-gradient(135deg,#ee0979, #ff6a00)`;
  }
  if (colorSelector.value == "five") {
    colorSelector.style.background = `linear-gradient(130deg,#ed1c24,#9e0b0f)`;
    mainBckground.style.backgroundImage = `linear-gradient(130deg,#ed1c24,#9e0b0f)`;
  }
  if (colorSelector.value == "six") {
    colorSelector.style.background = `linear-gradient(135deg,#ec38bc,#7303c0)`;
    mainBckground.style.backgroundImage = `linear-gradient(135deg,#ec38bc,#7303c0)`;
  }
  if (colorSelector.value == "seven") {
    colorSelector.style.background = `linear-gradient(140deg,)`;
    mainBckground.style.backgroundImage = `linear-gradient(130deg,#6190E8,#34e89e)`;
  }
  if (colorSelector.value == "eight") {
    colorSelector.style.background = `linear-gradient(135deg,#93A5CF,#E4EfE9)`;
    mainBckground.style.backgroundImage = `linear-gradient(135deg,#93A5CF,#E4EfE9)`;
  }
});

// Make input background transparent
const titleInput = document.getElementById("title");
var checkbox = document.getElementById("switchCheck");
checkbox.addEventListener("change", function () {
  // Check if the checkbox is checked and apply corresponding styles to the list item
  if (checkbox.checked) {
    var textarea = document.getElementById("myTextarea");
    textarea.style.background = "white";
    textarea.style.color = "black";
    titleInput.style.background = `black`;
    titleInput.style.color = `gray`;
  } else {
    var textarea = document.getElementById("myTextarea");
    textarea.style.background = `rgba(0,0,0,0.3)`;
    textarea.style.color = "white";
    titleInput.style.background = `rgba(0,0,0,0.3)`;
    titleInput.style.color = "black";
    textarea.style.fontFamily = `"Fraunces", serif`;
  }
});

// Change Padding
function changePadding() {
  var progressBar = document.getElementById("myProgressBar0");
  var padding = (progressBar.value / 100) * (120 - 60) + 60;
  mainBckground.style.padding = padding + "px";
}

//Change Width
function changeWidth() {
  var progressBar = document.getElementById("myProgressBar");
  var width = (progressBar.value / 100) * (1024 - 600) + 600;
  mainBckground.style.width = width + "px";
}

//Download Image
function downloadImg() {
  domtoimage
    .toPng(document.getElementById("outerBox"),{quality: 1.0})
    .then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "image.png";
      link.href = dataUrl;
      link.click();
    });
}

// Resize Text area
function resizeTextarea() {
  var textarea = document.getElementById("myTextarea");
  textarea.style.height = "auto"; // Reset height to auto to properly calculate scroll height
  textarea.style.height = textarea.scrollHeight + "px"; // Set the height based on content
}
