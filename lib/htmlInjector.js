import { BLACK_DISPLAYED_SQUARES, WHITE_DISPLAYED_SQUARES } from './constants'

const createCell = (x, y, cellSize, square) => {
    const cell = document.createElement('div')
    cell.id = `my-element-${square}`
    cell.innerHTML = square
    cell.style.border = '1px solid blue'
    cell.style.position = 'absolute'
    cell.style.height = cellSize + 'px'
    cell.style.width = cellSize + 'px'
    cell.style.top = x * cellSize + 'px'
    cell.style.left = y * cellSize + 'px'
    cell.style.fontSize = '20px'
    return cell
}

const updateCell = (square, value) => {
    const cell = document.getElementById(`my-element-${square}`)
    cell.innerHTML = value
}

const updateInfluences = (influences) => {
    for (const [square, value] of Object.entries(influences)) {
        console.log(square, value)
        updateCell(square, value)
    }
}

const createCustomBoard = () => {
    const boardHtml = document.querySelector('cg-container')
    const cellSize = boardHtml.clientHeight / 8

    const orientation = document.getElementsByClassName('orientation-white')
    const displayedBoard = orientation[0] ? WHITE_DISPLAYED_SQUARES : BLACK_DISPLAYED_SQUARES

    displayedBoard.map((square, i) => {
        boardHtml.appendChild(createCell(i % 8, Math.floor(i / 8), cellSize, square))
    })
}

export { createCustomBoard, updateInfluences }
