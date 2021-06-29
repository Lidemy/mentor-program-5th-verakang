/* eslint-disable indent */
/* eslint-disable camelcase */
/* eslint-disable prefer-template */

document.querySelector('form').addEventListener('submit',
    (e) => {
        e.preventDefault()
        const inputs = document.querySelectorAll('.required input')
        const checked = document.querySelectorAll('.required input[type=radio]:checked')
        let hasError = false
        const values = {}

        for (const input of inputs) {
            const type = input.getAttribute('type')
            const text__required = input.nextElementSibling
            const radio__required = input.parentNode.nextElementSibling
            let isValid = true

            // 如果 input 為空，顯示警示語。(radio 都會是 on，所以不會為空。)
            if (!input.value) {
                // 避開 type 為 radio 的判斷
                if (type !== 'radio') {
                    text__required.classList.remove('check__hidden')
                    isValid = false
                }
            }

            // 如果 input 不為空，隱藏警示語。(因 radio 不會為空，需再判斷是否有選擇。)
            if (input.value) {
                // 避開 type 為 radio 的判斷
                if (type !== 'radio') {
                    text__required.classList.add('check__hidden')
                    values[input.name] = input.value
                    isValid = true
                }
                // 針對 radio 做判斷
                if (type === 'radio') {
                    // '!checked.length' <=未勾選，顯示警示語。
                    // 'checked.length' <=已勾選，隱藏警示語。
                    if (!checked.length) {
                        radio__required.classList.remove('check__hidden')
                        isValid = false
                    } else if (checked.length) {
                        radio__required.classList.add('check__hidden')
                        const type = checked[0].nextElementSibling.innerText
                        values[input.name] = type
                        isValid = true
                    } else {
                        continue
                    }
                }
            }
            if (!isValid) {
                hasError = true
            }
        }
        if (!hasError) {
            const json = JSON.stringify(values)
            const results = json.split(',')
            let log = ''
            for (let i = 0; i < results.length; i++) {
                log += results[i] + '\n'
            }
            // 表單送出、點擊彈跳視窗後，重整頁面。
            if (!alert(log)) {
                window.location.reload()
            }
        }
    })
