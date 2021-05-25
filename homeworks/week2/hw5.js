//hw5：自己的函式自己寫

function join(arr, concatStr) {
    if (arr.length === 0) {
        return ''
    }
    var newStr = ''
    for (var i = 0; i < arr.length - 1; i++) {
        newStr += arr[i] + concatStr
    }
    return newStr + arr[arr.length - 1]
}

function repeat(str, times) {
    var newStr = ''
    for (var i = 0; i < times; i++) {
        newStr += str
    } 
    return newStr
}

console.log(join(['a'], '!'));
console.log(join(["a", 1, "b", 2, "c", 3], ','));

console.log(repeat('a', 5));
console.log(repeat('yoyo', 2));
