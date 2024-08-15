const squares = Array.from(document.getElementsByClassName('square'))
const text = document.getElementById('turn-text')

let turnX = true
let board = ['', '', '', '', '', '', '', '', '']

squares.forEach(square => {
    square.addEventListener('click', handleClick)
});

function handleClick(event) {
    const cell = event.target
    const index = squares.indexOf(cell)
    currentPlayer = turnX ? 'X' : 'O'

    cell.innerHTML = currentPlayer;

    turnX = !turnX;
}

console.log(squares[0])
