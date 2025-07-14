const sketchBox = document.querySelector(".container");
const BOX_SIZE = 960;
const button = document.querySelector("button");

function generateSketch(gridNum) {
    let gridSize = BOX_SIZE/gridNum;
    sketchBox.style.width = BOX_SIZE.toString() + "px";
    for (let i = 0; i < gridNum**2; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = gridSize.toString() + "px";
        grid.style.height = gridSize.toString() + "px";
        grid.addEventListener("mouseleave", function(e) {
            e.target.style.background = "blue";
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
        if (gridNum > 100) {
            alert("The size cannot be larger than 100");
        }
        else {
            let grids = document.querySelectorAll(".grid");
            grids.forEach(removeSketch);
            generateSketch(gridNum);
        }
    })
}

main();