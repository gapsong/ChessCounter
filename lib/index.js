import { createCustomBoard, updateInfluences } from './htmlInjector'
import influences from './heatmap'

function createFenFromMessage(message) {
    const playersTurn = message.d.ply % 2 == 0 ? 'w' : 'b'
    return `${message.d.fen} ${playersTurn} KQkq - 0 1`
}

try {
    let socket = new WebSocket(lichess.socket.ws.url)

    socket.onopen = function (event) {
        createCustomBoard()
    }

    socket.onmessage = function (event) {
        const m = JSON.parse(event.data)
        if (m.t == 'move' && document !== undefined) {
            const fen = createFenFromMessage(m)
            const array = influences(fen)
            updateInfluences(array)
            this.send('null')
        }
    }
} catch (e) {}
