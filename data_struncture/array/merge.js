const arr1 = [10,20,30];
const arr2 = [12,6,8,45,96,74,58];
const finalarr = [];

let arr1Index = 0;
let arr2Index = 0;

while( (arr1Index<arr1.length) || (arr2Index<arr2.length)){
     if(arr1Index < arr1.length){
        finalarr[finalarr.length] = arr1[arr1Index];  
        arr1Index++;
     }
     if(arr2Index < arr2.length){
        finalarr[finalarr.length] = arr2[arr2Index];  
        arr2Index++;
     }
}

console.log(finalarr.sort((a,b)=>a-b))