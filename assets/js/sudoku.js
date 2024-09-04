const sudokuBoard = document.getElementById('sudoku-board');

// Function to create the Sudoku grid dynamically
function createSudokuBoard() {
    const table = document.createElement('table');
    
    for (let row = 0; row < 9; row++) {
        const tr = document.createElement('tr');
        
        for (let col = 0; col < 9; col++) {
            const td = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;

            // Example of marking some cells as pre-filled
            if (Math.random() > 0.7) { // Randomly fill some cells as an example
                td.classList.add('prefilled');
                input.value = Math.floor(Math.random() * 9) + 1; // Random number between 1 and 9
                input.disabled = true; // Disable input for pre-filled cells
            }

            td.appendChild(input);
            tr.appendChild(td);
        }
        
        table.appendChild(tr);
    }
    
    sudokuBoard.appendChild(table);
}

// Function to generate a random Sudoku (currently simplified with random fills)
function generateRandomSudoku() {
    const inputs = document.querySelectorAll('.sudoku-cell input');
    inputs.forEach(input => {
        input.value = '';
        input.disabled = false;
        input.parentElement.classList.remove('prefilled');
    });
    
    // Call this to re-fill some cells randomly, as an example
    fillRandomCells();
}

// Helper function to randomly fill some cells
function fillRandomCells() {
    const inputs = document.querySelectorAll('.sudoku-cell input');
    inputs.forEach(input => {
        if (Math.random() > 0.7) {
            input.value = Math.floor(Math.random() * 9) + 1;
            input.disabled = true;
            input.parentElement.classList.add('prefilled');
        }
    });
}

// Create the Sudoku board on page load
createSudokuBoard();

// Generate Sudoku when the button is clicked
document.getElementById('generate-sudoku').addEventListener('click', generateRandomSudoku);
