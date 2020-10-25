import { Chess } from 'chess.js'
import influences from '../lib/heatmap.js'

describe('test heatmap.js', () => {
    it('should for rooks', () => {
        const board = new Chess('n1R3R1/8/8/8/8/8/8/8 w - - 0 1')
        board.ascii()
        expect(influences(board.fen())).toEqual([
            { square: 'a1', value: 0 },
            { square: 'a2', value: 0 },
            { square: 'a3', value: 0 },
            { square: 'a4', value: 0 },
            { square: 'a5', value: 0 },
            { square: 'a6', value: 0 },
            { square: 'a7', value: 0 },
            { square: 'a8', value: -2 },
            { square: 'b1', value: -1 },
            { square: 'b2', value: 0 },
            { square: 'b3', value: 0 },
            { square: 'b4', value: 0 },
            { square: 'b5', value: 0 },
            { square: 'b6', value: 1 },
            { square: 'b7', value: 0 },
            { square: 'b8', value: -1 },
            { square: 'c1', value: -1 },
            { square: 'c2', value: -1 },
            { square: 'c3', value: -1 },
            { square: 'c4', value: -1 },
            { square: 'c5', value: -1 },
            { square: 'c6', value: -1 },
            { square: 'c7', value: 0 },
            { square: 'c8', value: -1 },
            { square: 'd1', value: 0 },
            { square: 'd2', value: 0 },
            { square: 'd3', value: 0 },
            { square: 'd4', value: 0 },
            { square: 'd5', value: 0 },
            { square: 'd6', value: 0 },
            { square: 'd7', value: 0 },
            { square: 'd8', value: -2 },
            { square: 'e1', value: 0 },
            { square: 'e2', value: 0 },
            { square: 'e3', value: 0 },
            { square: 'e4', value: 0 },
            { square: 'e5', value: 0 },
            { square: 'e6', value: 0 },
            { square: 'e7', value: 0 },
            { square: 'e8', value: -2 },
            { square: 'f1', value: 0 },
            { square: 'f2', value: 0 },
            { square: 'f3', value: 0 },
            { square: 'f4', value: 0 },
            { square: 'f5', value: 0 },
            { square: 'f6', value: 0 },
            { square: 'f7', value: 0 },
            { square: 'f8', value: -2 },
            { square: 'g1', value: -1 },
            { square: 'g2', value: -1 },
            { square: 'g3', value: -1 },
            { square: 'g4', value: -1 },
            { square: 'g5', value: -1 },
            { square: 'g6', value: -1 },
            { square: 'g7', value: -1 },
            { square: 'g8', value: -1 },
            { square: 'h1', value: 0 },
            { square: 'h2', value: 0 },
            { square: 'h3', value: 0 },
            { square: 'h4', value: 0 },
            { square: 'h5', value: 0 },
            { square: 'h6', value: 0 },
            { square: 'h7', value: 0 },
            { square: 'h8', value: -2 },
        ])
    })

    it('should for rooks', () => {
        const board = new Chess('n1R3R1/8/8/8/8/8/8/8 w - - 0 1')
        board.ascii()
        influences(board.fen())
        console.log('influences(board.fen()): ', influences(board.fen()));
    })
})
