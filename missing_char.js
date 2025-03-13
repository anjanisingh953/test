const arr = ['a','b','c','d','y','z'];
const letters = 'abcdefghijklmnopqrstuvwxyz';
const missing_arr = [];

letters.split('').reduce((acc,val)=>{
    
    if(!arr.includes(val))
        missing_arr.push(val)
    
    return acc;
},[])

console.log(missing_arr.join(' '));



// main()
// async function main() {
//     console.log('start');
//     await display();
//     console.log('end');
// }

// async function display() {


    
//     setTimeout(function () {
//         console.log('timeout');
//     }, 10000);
    
//     console.log('display');
//     return {};
// }
// =============

// let test = {
//     a: 22
// };
// let one = test;
// let two = JSON.parse(JSON.stringify(test));
// test.a = 90;
// console.log('one ==== ', one);
// console.log('two ==== ', two);


// // ==========================
// // main()
// // async function main() {
// //     console.log('start');
// //     await display();
// //     console.log('end');
// // }

// // async function display() {


    
// //     setTimeout(function () {
// //         console.log('timeout');
// //     }, 10000);
    
// //     console.log('display');
// //     return {};
// // }
// // =============

// // let test = {
// //     a: 22
// // };
// // let one = test;
// // let two = JSON.parse(JSON.stringify(test));
// // test.a = 90;
// // console.log('one ==== ', one);
// // console.log('two ==== ', two);


// // ==========================


// // new Promise((resolve, reject) => {
// //     console.log('first');
// //     resolve(23)
// //  }).then(data => {
// //     console.log('1 ans = ', data);
// //     return data++;
// //  }).then(data => {
// //     console.log('2 ans = ', data);
// //     return ++data;
// //  }).then(data => {
// //     console.log('3 ans = ', data);
// //  });