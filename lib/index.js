import { createCustomBoard, updateinfluences } from './htmlInjector'
import influences from './heatmap'

function createFenFromMessage(message) {
    const playersTurn = message.d.ply % 2 == 0 ? 'b' : 'w'
    return `${message.d.fen} ${playersTurn} KQkq - 0 1`
}

try {
    createCustomBoard()
    let socket = new WebSocket(lichess.socket.ws.url)

    socket.onmessage = function (event) {
        const m = JSON.parse(event.data)
        console.log('m: ', m);

        if (m.t == 'move' && document !== undefined) {
            const fen = createFenFromMessage(m)
            const array = influences(fen)
            updateinfluences(array)
        }
    }
} catch (e) {}
