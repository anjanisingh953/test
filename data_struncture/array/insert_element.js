const arr = [10,20,50,60,70];
const el = 40;
const position = 2;

for(let i=arr.length-1; i >=position; i--){
    if(i>=position){
        arr[i+1] = arr[i];
        if(i==position){
            arr[i] = el;
        }
    }
}

console.log(arr); // [10,20,40,50,60,70];
