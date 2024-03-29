import { BLACK_DISPLAYED_SQUARES, WHITE_DISPLAYED_SQUARES } from './constants'

const createCell = (x, y, cellSize, square) => {
    const cell = document.createElement('div')
    cell.id = `my-element-${square}`
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

const updateCell = (cell, value) => {
    if (value == cell.value) return
    cell.innerHTML = value
    cell.style.backgroundColor = getTileColor(value)
}

const getTileColor = (value) => {
    if (value == 0) {
        return '#FFF'
    }
    if (value > 4) {
        return 'rgba(33, 113, 181, 0.7)'
    }
    if (value == 3) {
        return 'rgba(107, 174, 214, 0.7)'
    }
    if (value == 2) {
        return 'rgba(189, 215, 231, 0.7)'
    }
    if (value == 1) {
        return 'rgba(239, 243, 255, 0.7)'
    }
    if (value == -1) {
        return 'rgba(254, 240, 217, 0.7)'
    }
    if (value == -2) {
        return 'rgba(253, 204, 138, 0.7)'
    }
    if (value == -3) {
        return 'rgba(252, 141, 89, 0.7)'
    }
    if (value < -4) {
        return 'rgba(215, 48, 31, 0.7)'
    }
}

const updateInfluences = (board, influences) => {
    for (const [square, value] of Object.entries(influences)) {
        updateCell(board[square], value)
    }
}

const initCustomBoard = () => {
    const boardContainerHtml = document.querySelector('cg-container')
    const boardHtml = document.querySelector('cg-board')
    boardHtml.style.backgroundImage = 'none'
    const cellSize = boardContainerHtml.clientHeight / 8

    const orientation = document.getElementsByClassName('orientation-white')
    const displayedBoard = orientation[0] ? WHITE_DISPLAYED_SQUARES : BLACK_DISPLAYED_SQUARES

    let board = {}

    displayedBoard.map((square, i) => {
        const cell = createCell(i % 8, Math.floor(i / 8), cellSize, square)
        boardContainerHtml.appendChild(cell)
        board = { ...board, [square]: cell }
    })

    return board
}

const initCustomNumber = () => {
    console.log('hier')

    const TOPATT = 5
    const BOTATT = 5

    var elements = document.getElementsByClassName("rclock");
    let top = elements[0]
    let bottom = elements[1]
    const cell = document.createElement('p')
    cell.innerText = TOPATT
    const cell2 = document.createElement('p')
    cell2.innerText = BOTATT
    top.appendChild(cell)
    bottom.appendChild(cell2)

    return top, bottom
}

export { initCustomBoard, updateInfluences, initCustomNumber}
