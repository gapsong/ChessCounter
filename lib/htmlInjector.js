import { BLACK_DISPLAYED_SQUARES, WHITE_DISPLAYED_SQUARES } from './constants'

const createCell = (x, y, cellSize, square) => {
    const cell = document.createElement('div')
    cell.id = `my-${square}`
    cell.innerHTML = square
    cell.style.position = 'absolute'
    cell.style.height = cellSize + 'px'
    cell.style.width = cellSize + 'px'
    cell.style.top = x * cellSize + 'px'
    cell.style.left = y * cellSize + 'px'
    cell.style.fontSize = '20px'
    cell.style.pointerEvents = 'none'
    return cell
}

const updateCell = (square, value) => {
    const cell = document.getElementById(`my-${square}`)
    if (cell.value == value) return
    cell.innerHTML = value
    cell.style.backgroundColor = getTileColor(value)
}

const getTileColor = (value) => {
    if (value == 0) {
        return '#FFF'
    }
    if (value > 0) {
        return 'rgba(189, 215, 231, 0.7)'
    }
    if (value < 0) {
        return 'rgba(253, 204, 138, 0.7)'
    }
}

const updateInfluences = (influences) => {
    for (const [square, value] of Object.entries(influences)) {
        updateCell(square, value)
    }
}

const initCustomBoard = () => {
    const boardContainerHtml = document.querySelector('cg-container')
    const boardHtml = document.querySelector('cg-board')
    boardHtml.style.backgroundImage = 'none'
    const cellSize = boardContainerHtml.clientHeight / 8

    const orientation = document.querySelector('cg-board').classList.contains('orientation-white')
    const displayedBoard = orientation[0] ? WHITE_DISPLAYED_SQUARES : BLACK_DISPLAYED_SQUARES

    displayedBoard.map((square, i) => {
        boardContainerHtml.appendChild(createCell(i % 8, Math.floor(i / 8), cellSize, square))
    })
}

export { initCustomBoard, updateInfluences }
