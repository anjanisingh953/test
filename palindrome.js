function checkPalindrome (str){
    const rev_str = [];
    for(let i = str.length-1; i >=0 ; i-- ){
        rev_str.push(str[i]);
    }
    if(str === rev_str.join('')) return true
}

const result = checkPalindrome('eye');
console.log(result)