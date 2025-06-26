const arr = [20,2,5,8,3,1,56,85,195,4];

for(let i = 0; i < arr.length;i++){
    for(let j=0; j< arr.length; j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1];
            arr[j+1]=temp;
        }
    }
}

console.log(arr);
