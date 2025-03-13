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