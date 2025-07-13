let sketchBox = document.querySelector(".container");
const SIZE = 16;

for (let i = 0; i < SIZE**2; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    sketchBox.appendChild(grid);
}