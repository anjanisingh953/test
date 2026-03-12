// problem : Given an integer n, count the occurrences of the digit '1' in all numbers
//  from 1 to n numbers.

var countDigitOne = function(n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        let num = i.toString();
        count += num.split('1').length - 1;
    }

    return count;
}
const n_number = 13
const result = countDigitOne(n_number);
console.log(`Occurence of 1 upto ${n_number} is : `,result);