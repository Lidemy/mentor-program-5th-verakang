//hw3：反轉字串

function reverse(str) {
    var newWord = ''
    for (var i = str.length - 1; i >= 0; i--) {
        newWord += str[i]
    } 
    console.log(newWord)
}

reverse('hello');
