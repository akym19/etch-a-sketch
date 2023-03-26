const range = document.getElementById('range');
const grid = document.getElementById('gridContainer');
const size = document.getElementById('gridSize');
const gridItems = document.getElementsByClassName('gridItem');
const color = document.getElementById('color');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const defaultSize = 16;

let value = range.value;
let hoverColor = color.value; //sets default color to black
let isColor;
let isRainbow;
let isEraser;

clear.onclick = function() {
    //removes grid items and then reset grid size
    grid.innerHTML = '';
    setGridSize(value);
}

rainbow.onclick = function() {
    rainbow.classList.add('active')
    eraser.classList.remove('active')
    isColor = false;
    isRainbow = true;
    isEraser = false;
}

color.oninput = function() {
    // listens for color change
    rainbow.classList.remove('active')
    eraser.classList.remove('active')
    isColor = true;
    isRainbow = false;
    isEraser = false;
    hoverColor = this.value;
}

eraser.onclick = function() {
    rainbow.classList.remove('active')
    eraser.classList.add('active')
    isColor = false;
    isRainbow = false;
    isEraser = true;
}

function draw () {
    for (let item of gridItems) {
        item.addEventListener('mouseover', function (e) {
            if (isColor) {
                this.style.backgroundColor = hoverColor;
            } else if (isRainbow) {
                const randomR = Math.floor(Math.random() * 256);
                const randomG = Math.floor(Math.random() * 256);
                const randomB = Math.floor(Math.random() * 256);
                const randomRGB = `rgb(${randomR}, ${randomG}, ${randomB}`;
                this.style.backgroundColor = randomRGB;
            } else if (isEraser) {
                this.style.backgroundColor = 'white';
            }
        })
    }
}

function setGridSize (size) {
    grid.innerHTML = ''; //resets the grid
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //sets the columns
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`; //sets the rows
    addGrids();
    draw();
}

range.addEventListener('input', function(e) {
    //listens for grid size change
    value = e.target.value;
    setGridSize(value);
    updategridName(value);
})

function updategridName (size) {
    gridSize.innerHTML = `${size} x ${size}`; //updates the grid size name
}

function addGrids() {
    for (let i = 0; i < value * value; i++) {
        // adds elements depending on grid size
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        grid.appendChild(gridItem);
    }
}

window.addEventListener('load', setGridSize(defaultSize), updategridName(defaultSize)); //sets default