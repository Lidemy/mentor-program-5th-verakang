/* eslint-disable indent */
const request = require('request')

const apiUrl = 'https://lidemy-book-store.herokuapp.com/books'
const action = process.argv[2]
const params = process.argv[3]

// node hw2.js list  印出前二十本書的 id 與書名
function listBooks() {
    request.get(`${apiUrl}?_limit=20`,
        (error, response, body) => {
            if (error) {
                console.log('抓取失敗', error)
                return
            }
            let books
            try {
                books = JSON.parse(body)
            } catch (error) {
                console.log(error)
                return
            }
            for (let i = 0; i < books.length; i++) {
                console.log(`${books[i].id} ${books[i].name}`)
            }
        }
    )
}

// node hw2.js read 1  輸出 id 為 1 的書籍
function readBook(id) {
    request.get(`${apiUrl}/${id}`,
        (error, response, body) => {
            if (error) {
                console.log('抓取失敗', error)
                return
            }
            let book
            try {
                book = JSON.parse(body)
            } catch (error) {
                console.log(error)
                return
            }
            if (book.id === undefined) {
                console.log('沒有這本書喔！請再次確認編號：）')
                return
            }
            console.log(book.id, book.name)
        }
    )
}

// node hw2.js delete 1  刪除 id 為 1 的書籍
function deleteBook(id) {
    request.delete(`${apiUrl}/${id}`,
        (error, response, body) => {
            if (error) {
                console.log('刪除失敗', error)
            }
            console.log('刪除成功')
        }
    )
}

// node hw2.js create "I love coding"  新增一本名為 I love coding 的書
function creatBook(name) {
    request.post({
        url: apiUrl,
        form: {
            name
        }
    }, (error, response, body) => {
        if (error) {
            console.log('新增失敗', error)
        }
        console.log('新增成功')
    })
}

// node hw2.js update 1 "new name"  更新 id 為 1 的書名為 new name
function updateBook(id, name) {
    request.patch({
        url: `${apiUrl}/${id}`,
        form: {
            name
        }
    }, (error, response, body) => {
        if (error) {
            console.log('更新失敗', error)
        }
        let book
        try {
            book = JSON.parse(body)
        } catch (error) {
            console.log(error)
            return
        }
        if (book.id === undefined) {
            console.log('沒有這本書喔！請再次確認編號：）')
            return
        }
        console.log('更新成功')
    })
}

switch (action) {
    case 'list':
        listBooks()
        break
    case 'read':
        readBook(params)
        break
    case 'delete':
        deleteBook(params)
        break
    case 'create':
        creatBook(params)
        break
    case 'update':
        updateBook(params, process.argv[4])
        break
    default:
        console.log('Available commands: list, read, delete, create and update')
}
