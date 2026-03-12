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


