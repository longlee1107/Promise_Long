function _sortArr() {
    const arr = [10, 2, 3, 2, 5];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    // arr.sort(function(a, b) { return b - a })
    // return arr;
    document.write(arr + '<br>');
    document.write(arr.reverse())
}

function _reserveString() {
    let rawStr = "Hello CY VietNam";
    document.write(rawStr.split('').reverse().join(''));
}