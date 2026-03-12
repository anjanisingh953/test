const arr = [10,20,50,60,70];
const positon = 2;

for(let i=positon; i<arr.length-1; i++){
        arr[i] = arr[i+1]
}
arr.length = arr.length-1    
console.log(arr)  //[10,20,60,70]
