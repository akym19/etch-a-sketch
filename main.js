const range = document.getElementById('range');
const grid = document.getElementById('gridContainer');
const size = document.getElementById('gridSize');

range.addEventListener('change', function(e) {
    const value = e.target.value;
    setGridSize(value);
})

function setGridSize (size) {
    grid.innerHTML = '';
    gridSize.innerHTML = `${size} x ${size}`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let gridItem = document.createElement('div')
        gridItem.classList.add('gridItem')
        grid.appendChild(gridItem)
    }
}

window.onload(setGridSize (16))