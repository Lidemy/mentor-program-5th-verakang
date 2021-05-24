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
    const count = lines[0]
    function isPrime(n) {
        if (n === 1) {
            return false
        } else if (n > 1) {
            for (let i = 2; i < n; i += 1) {
                if (n % i === 0) {
                    return false
                }
            } return true
        }
    }
    for (let i = 1; i <= count; i += 1) {
        console.log(isPrime(Number(lines[i])) ? 'Prime' : 'Composite')
    }
}

rl.on('close', () => {
    solve(lines)
})
