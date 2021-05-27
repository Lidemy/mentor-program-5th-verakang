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
    function reverse(n) {
        let newStr = ''
        for (let i = n.length - 1; i >= 0; i -= 1) {
            newStr += n[i]
        }
        return newStr
    }

    console.log(reverse(lines[0]) === lines[0] ? 'True' : 'False')
}

rl.on('close', () => {
    solve(lines)
})
