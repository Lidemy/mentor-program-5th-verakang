/* eslint-disable indent */

// 新增TODO
document.querySelector('.todo__creat').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const add = document.querySelector('.todo__creat').value
        const label = document.createElement('label')
        label.classList.add('todo__item')
        label.innerHTML = `
            <li>
                <input type="checkbox" class="todo__check">
                <p class="todo__desc">${add}</p>
                <button class="todo__delete">X</button>
            </li>
        `
        document.querySelector('.todo__list').appendChild(label)
        document.querySelector('.todo__creat').value = ' '
    }
})

// 標註已完成TODO
document.querySelector('.todo__list').addEventListener('click',
    (e) => {
        if (e.target.classList.contains('todo__check')) {
            const label = e.target.closest('.todo__item')
            label.classList.toggle('todo__done')
        }
    }
)

// 刪除TODO
document.querySelector('.todo__list').addEventListener('click',
    (e) => {
        if (e.target.classList.contains('todo__delete')) {
            const label = e.target.closest('.todo__item')
            document.querySelector('.todo__list').removeChild(label)
        }
    }
)

// 刪除已完成所有TODO
document.querySelector('.btn__delete').addEventListener('click',
    (e) => {
        if (e.target.classList.contains('btn__delete')) {
            const labels = document.querySelectorAll('.todo__done')
            for (let i = 0; i < labels.length; i++) {
                document.querySelector('.todo__list').removeChild(labels[i])
            }
        }
    }
)
