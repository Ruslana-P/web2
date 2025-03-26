function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector("button.change-color");

btn.onclick = () => {
  const newColor = getRandomHexColor();
  document.body.setAttribute("style", `background-color: ${newColor}`);
  document.querySelector("span.color").innerHTML = newColor;
};
