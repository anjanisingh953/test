// Palindrome : A palindrome is a word, phrase, number, or any other sequence of characters
//  that reads the same forward and backward.

function checkPalindrome(num){

    if(num<0) return false; //Negative numbers are not palindrome
    
    let original_num = num;
    let reverse_num = 0;

    while(num>0){
        reverse_num = reverse_num*10 + num%10;
        num = Math.floor(num/10); 
    }

    return original_num == reverse_num;
}
let result = checkPalindrome(7)
console.log('Is palindrome :',result);