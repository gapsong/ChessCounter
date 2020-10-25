import { Chess } from 'chess.js'
import influences from '../lib/heatmap.js'

const initState = {
    a1: 0,
    a2: 0,
    a3: 0,
    a4: 0,
    a5: 0,
    a6: 0,
    a7: 0,
    a8: 0,
    b1: 0,
    b2: 0,
    b3: 0,
    b4: 0,
    b5: 0,
    b6: 0,
    b7: 0,
    b8: 0,
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
    c6: 0,
    c7: 0,
    c8: 0,
    d1: 0,
    d2: 0,
    d3: 0,
    d4: 0,
    d5: 0,
    d6: 0,
    d7: 0,
    d8: 0,
    e1: 0,
    e2: 0,
    e3: 0,
    e4: 0,
    e5: 0,
    e6: 0,
    e7: 0,
    e8: 0,
    f1: 0,
    f2: 0,
    f3: 0,
    f4: 0,
    f5: 0,
    f6: 0,
    f7: 0,
    f8: 0,
    g1: 0,
    g2: 0,
    g3: 0,
    g4: 0,
    g5: 0,
    g6: 0,
    g7: 0,
    g8: 0,
    h1: 0,
    h2: 0,
    h3: 0,
    h4: 0,
    h5: 0,
    h6: 0,
    h7: 0,
    h8: 0,
}

describe('test heatmap.js', () => {
    it('should calculate attackers for battery rooks', () => {
        const board = new Chess('n1R3R1/8/8/8/8/8/8/8 w - - 0 1')
        expect(influences(board.fen())).toEqual({
            ...initState,
            a8: -2,
            b6: 1,
            b8: -2,
            c1: -1,
            c2: -1,
            c3: -1,
            c4: -1,
            c5: -1,
            c6: -1,
            c8: -1,
            d8: -2,
            e8: -2,
            f8: -2,
            g1: -1,
            g2: -1,
            g3: -1,
            g4: -1,
            g5: -1,
            g6: -1,
            g7: -1,
            g8: -1,
            h8: -2,
        })
    })

    it('should calculate attackers for battery rooks and queen', () => {
        const board = new Chess('n1R3RQ/8/8/8/8/8/8/8 w - - 0 1')
        expect(influences(board.fen())).toEqual({
            ...initState,
            a1: -1,
            b2: -1,
            a8: -3,
            b6: 1,
            b8: -3,
            c1: -1,
            d4: -1,
            e5: -1,
            f6: -1,
            c2: -1,
            c3: -2,
            c4: -1,
            c5: -1,
            c6: -1,
            c8: -2,
            d8: -3,
            e8: -3,
            f8: -3,
            g1: -1,
            g2: -1,
            g3: -1,
            g4: -1,
            g5: -1,
            g6: -1,
            g7: -2,
            g8: -2,
            h8: -2,
            h1: -1,
            h2: -1,
            h3: -1,
            h4: -1,
            h5: -1,
            h6: -1,
            h7: -1,
        })
    })

    it('should calculate attackers for battery bishop and queen', () => {
        const board = new Chess('b7/1q6/8/8/8/8/8/8 b - - 0 1')
        expect(influences(board.fen())).toEqual({
            ...initState,
            a6: 1,
            a7: 1,
            a8: 1,
            b1: 1,
            b2: 1,
            b3: 1,
            b4: 1,
            b5: 1,
            b6: 1,
            b7: 1,
            b8: 1,
            c6: 2,
            c7: 1,
            c8: 1,
            d5: 2,
            d7: 1,
            e4: 2,
            e7: 1,
            f3: 2,
            f7: 1,
            g2: 2,
            g7: 1,
            h1: 2,
            h7: 1,
        })
    })

    it('should calculate attackers for battery bishop and pawn', () => {
        const board = new Chess('8/8/8/8/5P2/8/3B4/8 w - - 0 1')
        influences(board.fen())
        expect(influences(board.fen())).toEqual({
            ...initState,
            a5: -1,
            b4: -1,
            c1: -1,
            c3: -1,
            e1: -1,
            e3: -1,
            e5: -1,
            f4: -1,
            g5: -2,
        })
    })
})
