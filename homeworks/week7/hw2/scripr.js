/* eslint-disable indent */

const items = document.querySelectorAll('.qa__list')
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click',
        (e) => {
            const desc = document.getElementsByClassName('desc')[i]
            desc.classList.toggle('desc__hidden')
        })
}
