//hw2：首字母大寫

function capitalize(str) {
    var newWord = ''
    if (str[0] >= 'a' && str[0] <= 'z') {
        newWord += str[0].toUpperCase()
        for (var i = 1; i < str.length; i++) {
            newWord += str[i]
        }
        return newWord
    } return str
}

console.log(capitalize('hello'));
