import { ALL_SQUARES } from './constants'

const createCell = (x, y, cellSize, square) => {
    const cell = document.createElement('div')
    cell.id = `my-element-${square}`
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

    ALL_SQUARES.map((square, i) => {
        boardHtml.appendChild(createCell(key % 8, Math.floor(i / 8), cellSize, square))
    })
}

export { createCustomBoard, updateInfluences }
