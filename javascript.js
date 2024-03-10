const container = document.querySelector('#container');
const setGridSize = document.querySelector('#setGrid');

// Function to create row div
function createRow() {
    let row = document.createElement('div');
    row.id = 'row';
    return row;
}


// Function to create grid square
function createSquare() {
    let newSquare = document.createElement('div');
    newSquare.id = 'square';

    // change color when mouse enters
    newSquare.addEventListener('mouseenter', function() {
        newSquare.style.backgroundColor = 'rgb(' + randInt(0, 256) + ', ' + randInt(0, 256) + ', ' + randInt(0, 256) + ')';
    });

    return newSquare;
}


// Function to create Grid
function createGrid(gridSize=16) {

    let rowDiv;
    let square;
    for (i=0; i<gridSize; i++) {
        rowDiv = createRow();
        for (j=0; j<gridSize; j++) {
            square = createSquare();
            rowDiv.appendChild(square);
        };
        container.appendChild(rowDiv);
    };

};


// Button to set grid size
setGridSize.addEventListener('click', function() {

    let gridSize;
    gridSize = prompt('Enter grid size');

    while (gridSize > 100 || isNaN(gridSize)) {
        gridSize = prompt('Enter a valid grid size less than 100');
    };

    if (gridSize != null) {
        // clear existing grid
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        };

        // create new grid based on user input
        createGrid(gridSize);
    };

});


// Function to get a random integer between min (inclusive) and max (exclusive)
function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min)) + min;
}



// Create initial default 16x16 grid
createGrid();