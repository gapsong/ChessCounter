import { initCustomBoard, updateInfluences, initCustomNumber } from './htmlInjector'
import influences from './heatmap'

function createFenFromMessage(message) {
    const playersTurn = message.d.ply % 2 == 0 ? 'w' : 'b'
    return `${message.d.fen} ${playersTurn} KQkq - 0 1`
}
console.log('hier')
try {
    let socket = new WebSocket(lichess.socket.ws.url)
    let board
    let top, bot

    socket.onopen = function (event) {
        // board = initCustomBoard()
        top, bot = initCustomNumber()
    }

    // socket.onmessage = function (event) {
    //     const m = JSON.parse(event.data)
    //     if (m.t == 'move' && document !== undefined) {
    //         const fen = createFenFromMessage(m)
    //         const array = influences(fen)
    //         if (board !== undefined) updateInfluences(board, array)
    //         this.send('null')
    //     }
    // }

    socket.onmessage = function (event) {
        const m = JSON.parse(event.data)
        if (m.t == 'move' && document !== undefined) {
            const fen = createFenFromMessage(m)
            // const array = influences(fen)
            // if (board !== undefined) updateInfluences(board, array)
            this.send('null')
        }
    }
} catch (e) {}
