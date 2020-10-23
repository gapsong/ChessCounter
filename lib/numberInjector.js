// let board = document.getElementById("cg-board");

let board = document.querySelector('cg-container')

const fieldSize = board.clientHeight / 8

const createCell = (x, y, inhalt) => {
    var cell = document.createElement('div')
    cell.innerHTML = inhalt
    cell.style.border = '0px solid blue'
    cell.style.position = 'absolute'
    cell.style.height = fieldSize + 'px'
    cell.style.width = fieldSize + 'px'
    cell.style.top = x * fieldSize + 'px'
    cell.style.left = y * fieldSize + 5 + 'px'
    cell.style.fontSize = '20px'
    return cell
}

const renderNumbersFromArray = (array) => {
    array.map((item, key) => {
        board.appendChild(createCell(key % 8, Math.floor(key / 8), item))
    })
}
