//hw5：自己的函式自己寫

function join(arr, concatStr) {
    var newWord = ''
    for (var i = 0; i < arr.length - 1; i++) {
        newWord = newWord + arr[i] + concatStr
    }
    return newWord + arr[arr.length - 1]
}

function repeat(str, times) {
    var tmp = ''
    for (var i = 0; i < times; i++) {
        tmp = tmp + str
    }
}

console.log(join(['a'], '!'));
console.log(join(["a", 1, "b", 2, "c", 3], ','));

console.log(repeat('a', 5));
console.log(repeat('yoyo', 2));
