//   Input: arr[] = {3, 1, 3}
//          Output: Missing = 2, Repeating = 3
//           Explanation: In the array, 2 is missing and 3 occurs twice 

//           Input: arr[] = {4, 3, 6, 2, 1, 1}
//             Output: Missing = 5, Repeating = 1

const arr = [4, 3, 6, 2, 1, 1];

function findmissingnumber(arr){
    
    for(let i=0; i<arr.length;i++){
        console.log(i)
    }
    
};

findmissingnumber(arr)




// const arr = [
//     {fname:"Anjani", lname:"Singh", age:25},
//     {fname:"Vivek", lname:"Desai", age:50},
//     {fname:"Deepika", lname:"Singh", age:20},
//     {fname:"Mayank", lname:"Sharma", age:30}
// ];

// const output = arr.reduce((max,curr)=>{

//    if(curr.age>max){
//     max = curr.age
//    }
//    return max;
// },0);


// console.log(output)


// console.log(this)
// function test(){
//     console.log(this)

// }
// test();
