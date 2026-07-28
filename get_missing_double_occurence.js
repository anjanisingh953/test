//           Explanation: In the array, 2 is missing and 3 occurs twice 

//           Input: arr[] = {4, 3, 6, 2, 1, 1}
//             Output: Missing = 5, Repeating = 1

let arr = [4, 3, 6, 2, 1, 1];



const arr = [4, 6, 1, 2, 3, 2];

function findMissingAndRepeatElement(arr) {

    const n = arr.length;
    let repeating = -1;
    let missing = -1;

    for (let i = 1; i <= n; i++) {

        let count = 0;

        for (let j = 0; j < n; j++) {
            if (arr[j] === i) {
                count++;
            }
        }

        if (count === 2) {
            repeating = i;
        }

        if (count === 0) {
            missing = i;
        }

        if (repeating !== -1 && missing !== -1) {
            break;
        }
    }

    return [repeating, missing];
}


const result = findMissingAndRepeatElement(arr);
console.log(result);



// function test(arr){
//     const n = arr.length;
//     const expected_sum = (n*(n+1))/2
//     let obj ={};
//     let max = '';
//     let sum = 0;
//     for(let i=0; i<arr.length;i++){
        
//         let key = arr[i]
//         obj[key] = (obj[key]==undefined)?1:++obj[key];

//         if(max=='' || obj[key]>obj[max]){
//             max=key
//         }

//     }
    
//     for(let key in obj){
//         sum += Number(key)
//     }    

//     return {repeating:max,missing:expected_sum-sum}
// }

// console.log(test(arr))