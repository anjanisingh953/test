const arr = [10,20,50,60,70];
const el = 40;
const positon = 2;

for(let i=arr.length; i >=positon; i--){
 arr[i]=arr[i-1];
        if(i==positon){
            arr[i]=el
        }
}

console.log(arr); // [10,20,40,50,60,70];
