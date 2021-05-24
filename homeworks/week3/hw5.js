/* eslint-disable indent */

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin
})

const lines = []

rl.on('line', (line) => {
    lines.push(line)
})

function solve(input) {
    function compare(a, b, c) {
        if (a === b) return 'DRAW'
        if (c === '-1') {
            const backupNum = a
            a = b
            b = backupNum
        }
        const aLength = a.length
        const bLength = b.length
        if (aLength !== bLength) {
            return aLength > bLength ? 'A' : 'B'
        }
        return a > b ? 'A' : 'B'
    }
    for (let i = 1; i <= lines[0]; i++) {
        const tmp = lines[i].split(' ')
        const x = tmp[0]
        const y = tmp[1]
        const z = tmp[2]
        console.log(compare(x, y, z))
    }
}

rl.on('close', () => {
    solve(lines)
})
