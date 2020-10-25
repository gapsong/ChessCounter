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

const updateCell = (influence) => {
    const cell = document.getElementById(`my-element-${influence.square}`)
    cell.innerHTML = influence.value
}

const updateInfluences = (influences) => {
    influences.map((influence) => {
        updateCell(influence)
    })
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
