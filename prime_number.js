function isPrime(num) {
    if (num <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // If num is divisible by i, it's not prime
        }
    }

    return true; // If no divisors found, the number is prime
}

// Example usage:
console.log(isPrime(3));  // Output: true (7 is prime)
// console.log(isPrime(10)); // Output: false (10 is not prime)