function fibo(num) {
    const arr = [];
    for (let i = 1; i < num; i++) {

        if (arr.length == 0) {
            arr[0] = 0
        }
        if (i == 1) {
            arr[i] = i
        } else {
            arr[i] = arr[i - 1] + arr[i - 2];
        }

    }

    return arr;
}

