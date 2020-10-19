import { Chess } from 'chess.js'

// UTILS
const fenToBlack = (fen) => {
    const temp = fen.split(/\s+/)
    temp[1] = 'b'
    return temp.join(' ')
}

const fenRooksFill = (fen) => {
    // nimmt ein fen und füllt es komplett mit Rooks voll außer die Pawns, damit die Bauern einen gegner haben
    const temp = fen.split(/\s+/)
    if ((temp[1] == 'w')) {
        temp[0] = temp[0].replace(/[^P\/1-9]/g, 'p')
        temp[0] = temp[0].split(/\//g).map((row) => {
            row = row.replace(/1/g, 'p')
            row = row.replace(/2/g, 'pp')
            row = row.replace(/3/g, 'ppp')
            row = row.replace(/4/g, 'pppp')
            row = row.replace(/5/g, 'ppppp')
            row = row.replace(/6/g, 'pppppp')
            row = row.replace(/7/g, 'ppppppp')
            row = row.replace(/8/g, 'pppppppp')
            return row
        })
    } else {
        temp[0] = temp[0].replace(/[^p\/1-9]/g, 'P')
        temp[0] = temp[0].split(/\//g).map((row) => {
            row = row.replace(/1/g, 'P')
            row = row.replace(/2/g, 'PP')
            row = row.replace(/3/g, 'PPP')
            row = row.replace(/4/g, 'PPPP')
            row = row.replace(/5/g, 'PPPPP')
            row = row.replace(/6/g, 'PPPPPP')
            row = row.replace(/7/g, 'PPPPPPP')
            row = row.replace(/8/g, 'PPPPPPPP')
            return row
        })
    }
    temp[2] = '-'
    temp[0] = temp[0].join('/')
    return temp.join(' ')
}

// prettier-ignore
var SQUARES = {
    a8:   0, b8:   1, c8:   2, d8:   3, e8:   4, f8:   5, g8:   6, h8:   7,
    a7:  16, b7:  17, c7:  18, d7:  19, e7:  20, f7:  21, g7:  22, h7:  23,
    a6:  32, b6:  33, c6:  34, d6:  35, e6:  36, f6:  37, g6:  38, h6:  39,
    a5:  48, b5:  49, c5:  50, d5:  51, e5:  52, f5:  53, g5:  54, h5:  55,
    a4:  64, b4:  65, c4:  66, d4:  67, e4:  68, f4:  69, g4:  70, h4:  71,
    a3:  80, b3:  81, c3:  82, d3:  83, e3:  84, f3:  85, g3:  86, h3:  87,
    a2:  96, b2:  97, c2:  98, d2:  99, e2: 100, f2: 101, g2: 102, h2: 103,
    a1: 112, b1: 113, c1: 114, d1: 115, e1: 116, f1: 117, g1: 118, h1: 119
  };

let initialCounterAttackers = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0,
    22: 0,
    23: 0,
    32: 0,
    33: 0,
    34: 0,
    35: 0,
    36: 0,
    37: 0,
    38: 0,
    39: 0,
    48: 0,
    49: 0,
    50: 0,
    51: 0,
    52: 0,
    53: 0,
    54: 0,
    55: 0,
    64: 0,
    65: 0,
    66: 0,
    67: 0,
    68: 0,
    69: 0,
    70: 0,
    71: 0,
    80: 0,
    81: 0,
    82: 0,
    83: 0,
    84: 0,
    85: 0,
    86: 0,
    87: 0,
    96: 0,
    97: 0,
    98: 0,
    99: 0,
    100: 0,
    101: 0,
    102: 0,
    103: 0,
    112: 0,
    113: 0,
    114: 0,
    115: 0,
    116: 0,
    117: 0,
    118: 0,
    119: 0,
}

function file(i) {
    return i & 15
}

function rank(i) {
    return i >> 4
}

//_____________________________________

const chess = new Chess()
// Non pawn attacks
chess.moves({ verbose: true }).map((possibleMove) => {
    if (possibleMove.piece != 'p') {
        initialCounterAttackers[SQUARES[possibleMove.to]]++
    }
})
console.log(chess.fen())


// calc Pawn attackers
const filledBoard = new Chess(fenRooksFill(chess.fen()))
filledBoard.moves({ verbose: true })

filledBoard.moves({ verbose: true }).map((possibleMove) => {
    if (possibleMove['captured'] !== undefined) {
        initialCounterAttackers[SQUARES[possibleMove.to]]++
    }
})


// Jetzt Müssen die Bauern gezählt werden, die Angreifen

// count all attacking pieces

// count all fields, which are covered except for pawns

const printCounts = () => {
    var s = '   +------------------------+\n'
    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
        /* display the rank */
        if (file(i) === 0) {
            s += ' ' + '87654321'[rank(i)] + ' |'
        }
        /* empty piece */
        if (initialCounterAttackers[i] == 0) {
            s += ' . '
        } else {
            s += ' ' + initialCounterAttackers[i] + ' '
        }
        if ((i + 1) & 0x88) {
            s += '|\n'
            i += 8
        }
    }
    s += '   +------------------------+\n'
    s += '     a  b  c  d  e  f  g  h\n'
    return s
}

console.log(printCounts())
