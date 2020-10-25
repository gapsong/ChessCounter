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
    var chess = new Chess(fenForOtherSide(fen))
    var oppositeColor = chess.turn() == 'w' ? 'b' : 'w'
    var queenSquare = squaresOfPiece(fen, oppositeColor, 'q')
    chess.remove(queenSquare)
    chess.put(
        {
            // put queen in the square
            type: 'q',
            color: oppositeColor,
        },
        square
    )

    var moves = chess.moves({ verbose: true, legal: false })
    var defendersCount = moves.filter((m) => m.to == square && m.flags == 'c').length

    return defendersCount
}

function squaresOfPiece(fen, colour, pieceType) {
    var chess = new Chess(fen)
    
    return ALL_SQUARES.find((square) => {
        var r = chess.get(square)
        return r === null ? false : r.color == colour && r.type.toLowerCase() === pieceType
    })
}

function fenForOtherSide(fen) {
    return fen.search(' w ') > 0 ? fen.replace(/ w .*/, ' b - - 0 1') : fen.replace(/ b .*/, ' w - - 0 2')
}

function fenToBlack(fen) {
    return fen.search(' w ') > 0 ? fen.replace(/ w .*/, ' w - - 0 1') : fen.replace(/ b .*/, ' w - - 0 2')
}

export default influences
