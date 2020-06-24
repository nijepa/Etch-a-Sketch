const grid = document.querySelector(".gridContainer");
let userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");

if (!userInput.value || userInput != 16) {
    userInput.value = 16;
}

createGrid = () => {
  for (let i = 0; i < userInput.value * userInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

updateGrid = () => {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 2fr)`
  );
  createGrid();
};

const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
//   event.target.classList.replace("square", "color");
  event.target.style.backgroundColor = getRandomColor()
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

userInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", function() {
  grid.innerHTML = "";
  userInput.value = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  userInput.value = 16;
  createGrid();
  titleColors();
});

function titleColors() {
    let message = "ETCH-A-SKETCH";
    let spanEl = document.querySelectorAll('span');
    for (var i = 0; i < message.length; i++) {
        spanEl[i].style.color = getRandomColor();
    }
}

titleColors();
createGrid();