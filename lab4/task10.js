const boxesCnt = document.querySelector("#boxes");

const getNumber = () => {
  const number = document.querySelector("input").value;

  if (!number || number < 1 || number > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  return number;
};

const createBoxes = (amount) => {
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    boxes.push(box);
  }

  destroyBoxes();
  boxesCnt.append(...boxes);
};

function destroyBoxes() {
  boxesCnt.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-create")) {
    const number = getNumber();

    if (number) {
      createBoxes(number);
      document.querySelector("input").value = "";
    }
  } else if (event.target.hasAttribute("data-destroy")) {
    destroyBoxes();
  }
});
