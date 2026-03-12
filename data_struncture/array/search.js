//Linear search algorithm for Searching

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


// //Searchig using iterative search algorithm
// const arr = [10,20,35,40,55,60,70,80];

// let find = 60;
// let start = 0;
// let end = arr.length-1; 
// let position = undefined;

// while(start<=end){
//     let mid = Math.floor((start+end)/2);
    
//     if(find == arr[mid]){
//         position = mid;
//         break;
//     }else if(find>arr[mid]){
//         start = mid+1 
//     }else{
//         end = mid-1;
//     }
// }


// console.log(position)