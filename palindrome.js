//Method 1
function checkPalindrome (str){
    let start = 0;
    let end = str.length-1;
    let result = true;

    while(end>start){
        if(str[start] != str[end]) result=false;
        start++;
        end--;
    }
    
    return result;
}

const result = checkPalindrome('level');
console.log(result)


// //Method 2
// function checkPalindrome (str){
//     const rev_str = [];
//     for(let i = str.length-1; i >=0 ; i-- ){
//         rev_str.push(str[i]);
//     }
//     if(str === rev_str.join('')) return true
// }

// const result = checkPalindrome('eye');
// console.log(result)