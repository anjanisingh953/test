// Fibonacci number : The sequence starts with 0 and 1, and from there, each subsequent
// number is the sum of the previous two numbers.

// function fibo(num) {
//   let n1 = 0; let n2 =1; let nextTerm;
//   const arr = [];
//   for(let i = 0; i<num; i++){
// //      arr.push(n1);
//         arr[i] = n1;
//         nextTerm = n1+n2;
//         n1 = n2;
//         n2 = nextTerm;
//   }
//   return arr;
// }
// const result = fibo(5)
// console.log('result',result);



// function fibo(num) {
//     const arr = [];
//     for (let i = 1; i < num; i++) {

//         if (arr.length == 0) {
//             arr[0] = 0
//         }
//         if (i == 1) {
//             arr[i] = i
//         } else {
//             arr[i] = arr[i - 1] + arr[i - 2];
//         }

//     }

//     return arr;
// }
// console.log(fibo(5))