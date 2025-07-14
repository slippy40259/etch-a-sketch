const sketchBox = document.querySelector(".container");
const BOX_SIZE = 960;
const MAX_BOX_SIZE = 100;
const button = document.querySelector("button");

function getRandomColor() {
    let red = Math.floor(Math.random() * 255).toString();
    let blue = Math.floor(Math.random() * 255).toString();
    let green = Math.floor(Math.random() * 255).toString();
    return "rgb" + "(" + red + "," + blue + "," + green + ")";
}

function generateSketch(gridNum) {
    let gridSize = BOX_SIZE/gridNum;
    let opacity = 0;
    let opacityInc = 0.1;
    sketchBox.style.width = BOX_SIZE.toString() + "px";
    for (let i = 0; i < gridNum**2; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = gridSize.toString() + "px";
        grid.style.height = gridSize.toString() + "px";
        grid.addEventListener("mouseleave", function(e) {
            e.target.style.background = getRandomColor();
            e.target.style.opacity = opacity+=opacityInc;
        })

        sketchBox.appendChild(grid);
    }
}

function removeSketch(grid) {
    sketchBox.removeChild(grid);
}

function main() {
    let gridNum = 16;
    generateSketch(gridNum);

    button.addEventListener("click", function() {
        gridNum = prompt("Enter a size of the sketch box");
        gridNum = Number(gridNum);
        if (gridNum > MAX_BOX_SIZE) {
            alert("The size cannot be larger than 100");
        }
        else if (isNaN(gridNum) || gridNum == "") {
            alert("This is not a number");
        }
        else {
            let grids = document.querySelectorAll(".grid");
            grids.forEach(removeSketch);
            generateSketch(gridNum);
        }
    })
}

main();