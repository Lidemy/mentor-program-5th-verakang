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
    const tmp = lines[0].split(' ')

    function findDigits(n) {
        let oldNum = n
        let digitsCount = 0
        while (oldNum !== 0) {
            oldNum = Math.floor(oldNum / 10)
            digitsCount += 1
        }
        return digitsCount
    }

    function isNarcissistic(n) {
        let oldNum = n
        let addNum = 0
        while (oldNum !== 0) {
            addNum += (oldNum % 10) ** findDigits(n)
            oldNum = Math.floor(oldNum / 10)
        }
        if (addNum === n) {
            return true
        }
        return false
    }

    for (let i = Number(tmp[0]); i <= Number(tmp[1]); i++) {
        if (isNarcissistic(i)) {
            console.log(i)
        }
    }
}

rl.on('close', () => {
    solve(lines)
})
