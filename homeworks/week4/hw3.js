/* eslint-disable indent */
const request = require('request')

const argv = process.argv[2]
const apiUrl = 'https://restcountries.eu/rest/v2/name/'

function getCountry(name) {
    if (!argv) {
        console.log('請輸入國家名稱！')
        return
    }
    request.get(`${apiUrl}${name}`,
        (error, response, body) => {
            if (error) {
                console.log('抓取失敗', error)
                return
            }
            let countrys
            try {
                countrys = JSON.parse(body)
            } catch (error) {
                console.log(error)
                return
            }
            if (response.statusCode === 404) {
                console.log('找不到國家資訊')
                return
            }
            for (let i = 0; i < countrys.length; i++) {
                console.log(`============
國家：${countrys[i].name}
首都：${countrys[i].capital}
貨幣：${countrys[i].currencies[0].code}
國碼：${countrys[i].callingCodes[0]}`)
            }
        }
    )
}

getCountry(argv)
