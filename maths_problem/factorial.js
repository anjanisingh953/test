//First way start
let n = 5
let result =1;

while(n>0){
    result *=n;
    n--;
}

console.log(result)
//First way end


//Second way start

// function factorial(num){

//     if(num<=1) return 1

//     return num*factorial(num-1)
// }

// const result = factorial(5)

// console.log(result)

//Second way end

//third way start

// let n = 5; 

// function factorial(n) { 
//     let ans = 1; 
    
//     if(n === 0)
//         return 1;
//     for (let i = 2; i <= n; i++) 
//         ans = ans * i; 
//     return ans; 
// }

//third way end

// console.log(factorial(n));