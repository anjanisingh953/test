// Prime Number : A prime number is a number that is greater than 1 and has only two factors: 
// 1 and itself. In other words, a prime number is not divisible by any other numbers except  
// 1 and itself.
function isPrime(num) {
    
    // Numbers less than or equal to 1 are not prime
    if (n <= 1) return false;
    
    // Looping from 2 to n-1 to check for divisibility
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false; // If num is divisible by i, it's not prime
    }

    return true; // If no divisors found, the number is prime
}

// Example usage:
console.log(isPrime(3));  // Output: true (7 is prime)
// console.log(isPrime(10)); // Output: false (10 is not prime)