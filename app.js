function generateRandomColor() {
  const maxVal = 0xffffff;
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  randColor = `#${randColor.toUpperCase()}`;

  const root = document.querySelector(":root");
  root.style.setProperty("--primaryBlue", randColor);
}
