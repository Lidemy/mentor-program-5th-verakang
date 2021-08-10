/* eslint-disable indent */
/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

const apiUrl = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery'
const errorMessage = '系統不穩定，請再試一次。'

function draw(callback) {
    const request = new XMLHttpRequest()
    request.open('GET', apiUrl, true)
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            // Success!
            let resp
            // try catch 驗證是否為 json 格式
            try {
                resp = JSON.parse(this.response)
            } catch (error) {
                callback(errorMessage)
                return
            }
            const result = resp.prize
            if (!result) {
                callback(errorMessage)
                return
            }
            // 如果沒有錯誤，回傳結果。
            callback(null, result)
        } else {
            callback(errorMessage)
        }
    }
    request.onerror = function () {
        callback(errorMessage)
    }
    request.send()
}

document.querySelector('.lottery__btn').addEventListener('click',
    () => {
        const banner = document.querySelector('.banner')
        const lottery = document.querySelector('.lottery')
        const win = document.querySelector('.lottery__win')
        const win__title = document.querySelector('.lottery__win > p')

        draw((error, result) => {
            if (error) {
                alert(error)
                return
            }
            let title
            if (result === 'FIRST') {
                banner.style.background = 'url(img/first.jpg) center/cover no-repeat'
                title = '恭喜你中頭獎了！日本東京來回雙人遊！'
            } else if (result === 'SECOND') {
                banner.style.background = 'url(img/second.jpg) center/cover no-repeat'
                title = '二獎！90 吋電視一台！'
            } else if (result === 'THIRD') {
                banner.style.background = 'url(img/third.jpg) center/cover no-repeat'
                title = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！'
            } else if (result === 'NONE') {
                banner.style.background = '#000'
                win__title.style.color = '#fff'
                title = '銘謝惠顧'
            }
            lottery.classList.add('lottery__hidden')
            win.classList.remove('lottery__hidden')
            win__title.innerText = title
        })
    })

document.querySelector('.lottery__win__btn').addEventListener('click',
    () => {
        window.location.reload()
    })
