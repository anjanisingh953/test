const arr = [1,2,7,5,10];

const asc = arr.sort((a,b)=>a-b);
const min = asc[0];
const desc = arr.sort((a,b)=>b-a);
const max = desc[0];

const missing_val_arr = [];

for(let i =min; i<= max; i++ ){
    
    if(!arr.includes(i)) missing_val_arr.push(i)
}

console.log("Original_arr => ",arr);
console.log("Missing_val => ",missing_val_arr)




/*

const arr = [1, 2, 7, 5, 10];

const obj = {}
let min = arr[0];
let max = arr[0];
let missing =[];

for(let i =0; i<arr.length; i++){
  if(!obj[arr[i]]){
    obj[arr[i]]=true
  }
  if(arr[i]<min){
    min =arr[i]
  }
  if(arr[i]>max){
    max= arr[i]
  }
}

for(let i=min; i<=max; i++){
   if(!obj[i]){
    missing[missing.length]=i
   }
}

console.log(missing)

*/