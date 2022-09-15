const body = document.querySelector('body');
const container = document.createElement('div');
body.appendChild(container);

const x = 4;
const y = 4;

function createGrid() {
    for (i = 0; i < x; i++) {
        let row = document.createElement('div');
        row.setAttribute('id', `row${i + 1}`)
        container.appendChild(row);
    
        for (j = 0; j < y; j++) {
            let square = document.createElement('div');
            square.setAttribute('class', 'square');
            row.appendChild(square);
        }
    }
}

createGrid();
