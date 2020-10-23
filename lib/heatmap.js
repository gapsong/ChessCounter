import { Chess } from 'chess.js'

var allSquares = [
    ...['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'],
    ...['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'],
    ...['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
    ...['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8'],
    ...['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8'],
    ...['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'],
    ...['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8'],
    ...['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8'],
]

function influence(fen) {
    var defenders = allSquares.map((s) => countSquareDefenders(fen, s))
    var attackers = allSquares.map((s) => countSquareDefenders(fenForOtherSide(fen), s))
    return allSquares.map(function (square, i) {
        return { [square]: defenders[i] - attackers[i] }
    })
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
    return allSquares.find((square) => {
        var r = chess.get(square)
        return r === null ? false : r.color == colour && r.type.toLowerCase() === pieceType
    })
}

function fenForOtherSide(fen) {
    return fen.search(' w ') > 0 ? fen.replace(/ w .*/, ' b - - 0 1') : fen.replace(/ b .*/, ' w - - 0 2')
}

export default influence
