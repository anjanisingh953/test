 function factorial(num){

    if(num<1) return 1

    return num*factorial(num-1)
}

const result = factorial(5)

console.log(result)


//second way

// let n = 5; 

// function factorial(n) { 
//     let ans = 1; 
    
//     if(n === 0)
//         return 1;
//     for (let i = 2; i <= n; i++) 
//         ans = ans * i; 
//     return ans; 
// }

// console.log(factorial(n));