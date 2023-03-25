const range = document.getElementById('range');
const grid = document.getElementById('gridContainer');
const size = document.getElementById('gridSize');
const gridItems = document.getElementsByClassName('gridItem');
const color = document.getElementById('color');

color.oninput = function() {
    // change colorizer
    hoverColor = this.value;
}

let hoverColor = color.value;

window.addEventListener('load', setGridSize(16));

range.addEventListener('change', function(e) {
    const value = e.target.value;
    setGridSize(value);
})

function setGridSize (size) {
    grid.innerHTML = ''; //resets the grid
    gridSize.innerHTML = `${size} x ${size}`; //updates the grid size name
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //sets the columns
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`; //sets the rows

    for (let i = 0; i < size * size; i++) {
        // adds elements depending on grid size
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        grid.appendChild(gridItem);
    }
    colorize();
}

function colorize () {
    for (let item of gridItems) {
        item.addEventListener('mouseover', function (e) {
            this.style.backgroundColor = hoverColor;
        })
    }
}