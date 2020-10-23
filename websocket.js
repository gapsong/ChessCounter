import heatmap from './lib/heatmap'
import numberInjector from './lib/numberInjector'

function createFenFromMessage(message) {
    const playersTurn = message.d.ply % 2 == 0 ? 'b' : 'w'
    return `${message.d.fen} ${playersTurn} KQkq - 0 1`
}

let socket = new WebSocket(lichess.socket.ws.url)

socket.onmessage = function (event) {
    const m = JSON.parse(event.data)
    if (m.t == 'move') {
        const fen = createFenFromMessage(m)
        const array = heatmap(fen)
        const board = document.querySelector('cg-container')
        numberInjector(array, board)
    }
}

let socket = new WebSocket(lichess.socket.ws.url)
socket.onmessage = function (event) {
    const m = JSON.parse(event.data)
    if (m.t == 'move' && document !== undefined) {
        const fen = createFenFromMessage(m)
        const array = influence(fen)
        const board = document.querySelector('cg-container')
        renderNumbersFromArray(array, board)
    }
}
