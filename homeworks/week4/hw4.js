/* eslint-disable indent */
/* eslint-disable quote-props */

const request = require('request')

const apiUrl = 'https://api.twitch.tv/kraken'
const clientId = 'qu8k64o0ycgnn98s7fsphm52by56xp'

const options = {
    url: `${apiUrl}/games/top`,
    headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': clientId
    }
}

function getCountry(error, response, body) {
    if (!error && response.statusCode === 200) {
        let games
        try {
            games = JSON.parse(body)
        } catch (error) {
            console.log(error)
            return
        }
        const gameInfo = games.top
        for (let i = 0; i < gameInfo.length; i++) {
            console.log(`${gameInfo[i].viewers} ${gameInfo[i].game.name}`)
        }
    }
}

request(options, getCountry)
