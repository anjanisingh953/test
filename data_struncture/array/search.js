const arr = [10,20,3,50,60,40,50,80];

const el = 50;
let indexEl = []
for(let i = 0; i<arr.length; i++){
    
    if(arr[i] == el){
        indexEl[indexEl.length] = i;
        // break;
    }
}

console.log(indexEl);
