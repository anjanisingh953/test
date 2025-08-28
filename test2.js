const arr = [10,20,30,40,50,60];
const delete_item = 40;
const index_num = arr.indexOf(30);

for(let i =index_num ; i<arr.length-1; i++){
    arr[i] = arr[i+1];
 }
arr.length = arr.length-1 
console.log(arr);
