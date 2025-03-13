// program to generate fibonacci series up to n terms

// take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));
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


// function fibo(num){
//     let n1 = 0, n2 = 1, nextTerm;
//     fibser = [];

//     for (let i = 1; i <= num; i++) {
//         fibser.push(n1)    
//         // console.log(fibser)
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//     }
//     return fibser
// }

console.log(fibo(5))