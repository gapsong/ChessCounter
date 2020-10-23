const createCell = (x, y, inhalt, cellSize) => {
    var cell = document.createElement('div')
    cell.innerHTML = inhalt
    cell.style.border = '0px solid blue'
    cell.style.position = 'absolute'
    cell.style.height = cellSize + 'px'
    cell.style.width = cellSize + 'px'
    cell.style.top = x * cellSize + 'px'
    cell.style.left = y * cellSize + 5 + 'px'
    cell.style.fontSize = '20px'
    return cell
}

const renderNumbersFromArray = (array, htmlElement) => {
    const cellSize = htmlElement.clientHeight / 8
    array.map((item, key) => {
        htmlElement.appendChild(createCell(key % 8, Math.floor(key / 8), item, cellSize))
    })
}

export default renderNumbersFromArray
