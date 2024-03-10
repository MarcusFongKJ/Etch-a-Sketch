const container = document.querySelector('#container');
const setGridSize = document.querySelector('#setGrid');
const reset = document.querySelector('#reset');

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
        
        let computedStyle = window.getComputedStyle(newSquare);
        let rgbValue = computedStyle.getPropertyValue('background-color');

        if (rgbValue == 'rgb(211, 211, 211)') {
            newSquare.style.backgroundColor = 'rgb(' + randInt(0, 256) + ', ' + randInt(0, 256) + ', ' + randInt(0, 256) + ')';
        } else {
            let newRGB = darken(rgbValue);
            newSquare.style.backgroundColor = newRGB;
        }

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
};


// Function to darken existing RGB value
function darken(rgbString) {

    let rgb = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    let r = parseInt(rgb[1]);
    let g = parseInt(rgb[2]);
    let b = parseInt(rgb[3]);

    // Calculate the new darkened RGB values
    r = Math.round(r * 0.9); // Darken red by 10%
    g = Math.round(g * 0.9); // Darken green by 10%
    b = Math.round(b * 0.9); // Darken blue by 10%

    // Return the darkened color as an RGB string
    return 'rgb(' + r + ',' + g + ',' + b + ')';

};


// Reset button
reset.addEventListener('click', function() {

    let squares = document.querySelectorAll('#square');
    squares.forEach(function(square) {
        square.style.backgroundColor = 'rgb(211, 211, 211)';
    });

});

// Create initial default 16x16 grid
createGrid();