const DEFAULT_DENSITY = "       .,:;i1tfLCG08@";
let density = DEFAULT_DENSITY;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const asciiOutput = document.getElementById("asciiOutput");
const btn = document.getElementById("pauseBtn");
const charInput = document.getElementById("charInput");
const fontSizeInput = document.getElementById("fontSizeInput");
const colorInput = document.getElementById("colorInput");

const WIDTH = 640;
const HEIGHT = 360;

canvas.width = WIDTH;
canvas.height = HEIGHT;

// sync default UI values
charInput.value = DEFAULT_DENSITY;
fontSizeInput.value = 10;
colorInput.value = "#ffffff";

let video = document.createElement("video");
let stream = null;
let paused = false;

// mirror canvas for selfie effect
ctx.translate(WIDTH, 0);
ctx.scale(-1, 1);

// update density only when user edits
charInput.addEventListener("input", () => {
  density = charInput.value || " ";
});

//  APPLY ASCII STYLES 
function applyAsciiStyles() {
  const size = fontSizeInput.value || 10;

  asciiOutput.style.fontSize = size + "px";
  asciiOutput.style.lineHeight = size + "px";
  asciiOutput.style.color = colorInput.value;
  asciiOutput.style.fontFamily = "Consolas, monospace";
}

// CALL ONCE AT START
applyAsciiStyles();

// UPDATE WHEN USER CHANGES CONTROLS
fontSizeInput.addEventListener("input", applyAsciiStyles);
colorInput.addEventListener("input", applyAsciiStyles);

async function initCamera() {
  stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  });

  video.srcObject = stream;
  video.setAttribute("playsinline", true);
  video.muted = true;
  await video.play();

  requestAnimationFrame(renderFrame);
}

function renderFrame() {
  if (!paused) {
    ctx.drawImage(video, 0, 0, WIDTH, HEIGHT);

    const imageData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
    const pixels = imageData.data;

    let ascii = "";
    const step = 6;

    for (let y = 0; y < HEIGHT; y += step) {
      for (let x = 0; x < WIDTH; x += step) {
        const index = (x + y * WIDTH) * 4;

        const r = pixels[index];
        const g = pixels[index + 1];
        const b = pixels[index + 2];

        const brightness = (r + g + b) / 3;
        const charIndex = Math.floor(
          (brightness / 255) * (density.length - 1)
        );

        ascii += density[density.length - charIndex - 1];
      }
      ascii += "\n";
    }

    // only text rendering here
    asciiOutput.textContent = ascii;
  }

  requestAnimationFrame(renderFrame);
}

btn.addEventListener("click", () => {
  paused = !paused;
  btn.textContent = paused ? "▶ Play" : "⏸ Pause";
});

initCamera();
