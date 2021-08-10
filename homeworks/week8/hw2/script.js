/* eslint-disable indent */
/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-destructuring */

const API_URL = 'https://api.twitch.tv/kraken'
const CLIENTI_ID = 'qu8k64o0ycgnn98s7fsphm52by56xp'
const STREAM_TEMP = `
    <div class="stream">
    <img src="$preview" class="preview" />
    <div>
        <div class="userPic"><img src="$logo" /></div>
        <div class="streamInfo">
            <div class="streamTitle">$status</div>
            <div class="streamUser">$name</div>
        </div>
    </div>
    </div>`

getTopGames((games) => {
    for (const game of games) {
        const element = document.createElement('li')
        element.innerText = game.game.name
        document.querySelector('.navbar').appendChild(element)
    }
    changeGame(games[0].game.name)
})

document.querySelector('.navbar').addEventListener('click',
    (e) => {
        if (e.target.tagName.toLowerCase() === 'li') {
            const title = e.target.innerText
            document.querySelector('.games').innerHTML = ''
            changeGame(title)
        }
    })

function getTopGames(callback) {
    const request = new XMLHttpRequest()
    // 備註一下，api 偶爾怪怪，有時候 limit 取出來的數量有誤，測試 3 卻只有 2 筆資料。
    request.open('GET', `${API_URL}/games/top?limit=5`, true)
    request.setRequestHeader('Client-Id', CLIENTI_ID)
    request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            let games
            try {
                games = JSON.parse(this.response).top
            } catch (error) {
                console.log(error)
                return
            }
            callback(games)
        }
    }
    request.send()
}

function getStream(title, callback) {
    const request = new XMLHttpRequest()
    request.open('GET', `${API_URL}/streams/?game=${encodeURIComponent(title)}`, true)
    request.setRequestHeader('Client-Id', CLIENTI_ID)
    request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            const streams = JSON.parse(this.response).streams
            callback(streams)
        }
    }
    request.send()
}

function changeGame(title) {
    document.querySelector('h2').innerText = title
    getStream(title, (streams) => {
        for (let i = 0; i < 20; i++) {
            const element = document.createElement('div')
            document.querySelector('.games').appendChild(element)
            element.outerHTML = STREAM_TEMP
                .replace('$preview', streams[i].preview.large)
                .replace('$logo', streams[i].channel.logo)
                .replace('$status', streams[i].channel.status)
                .replace('$name', streams[i].channel.display_name)
        }
    })
}
