import { Chess } from 'chess.js'
import { ALL_SQUARES } from './constants'

function influences(fen) {
    const blackFen = fenToBlack(fen)
    const defenders = ALL_SQUARES.map((square) => countSquareDefenders(blackFen, square))
    const attackers = ALL_SQUARES.map((square) => countSquareDefenders(fenForOtherSide(blackFen), square))
    var response = {}

    ALL_SQUARES.map(function (square, i) {
        response = { ...response, [square]: defenders[i] - attackers[i] }
    })

    return response
}

function countSquareDefenders(fen, square) {
    var chess = new Chess(fen)
    var opChess = new Chess(fenForOtherSide(fen))
    var oppositeColor = opChess.turn() == 'w' ? 'b' : 'w'
    opChess.put(
        {
            // put queen in the square, but could be any other piece aswell
            type: 'q',
            color: oppositeColor,
        },
        square
    )

    var moves = opChess.moves({ verbose: true, legal: false })
    var defendersCount = moves.filter((m) => {
        if (m.to == square && m.flags == 'c') {
            chess.remove(m.from) // Removes all attacking pieces
            return true
        } else {
            return false
        }
    }).length

    if (defendersCount == 0) {
        return 0
    }

    return defendersCount + countSquareDefenders(chess.fen(), square) // This line removes all attackers and calls the function again. To detect batteries
}

function fenForOtherSide(fen) {
    return fen.search(' w ') > 0 ? fen.replace(/ w .*/, ' b - - 0 1') : fen.replace(/ b .*/, ' w - - 0 2')
}

function fenToBlack(fen) {
    return fen.search(' w ') > 0 ? fen.replace(/ w .*/, ' w - - 0 1') : fen.replace(/ b .*/, ' w - - 0 2')
}

export default influences
