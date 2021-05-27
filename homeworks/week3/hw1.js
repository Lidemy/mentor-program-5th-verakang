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
    for (let i = 1; i <= lines[0]; i += 1) {
        console.log('*'.repeat(i))
    }
}

rl.on('close', () => {
    solve(lines)
})
