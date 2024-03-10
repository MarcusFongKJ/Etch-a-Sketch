const container = document.querySelector('#container');

// Function to create 1 square
function createSquare() {
    let newSquare = document.createElement('div');
    newSquare.id = 'square';
    return newSquare;
}

// Function to create row div
function createRow() {
    let row = document.createElement('div');
    row.id = 'row';
    return row;
}


// Function to create Grid
function createGrid() {

    let rowDiv;
    let square;
    for (i=0; i<16; i++) {
        rowDiv = createRow();
        for (j=0; j<16; j++) {
            square = createSquare();
            rowDiv.appendChild(square);
        };
        container.appendChild(rowDiv);
    };

};

createGrid();