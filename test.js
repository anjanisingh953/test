const str1 = 'hello'
const str2 = 'he0ll'

function checkPalindrome(str1,str2){
    if(str1.length != str2.length) return false;

    let obj = {}
    for(let ch of str1){
        obj[ch] = (obj[ch]==undefined)?1:++obj[ch];
    }

    for(let ch of str2){
        if(!obj[ch]){return false}
        --obj[ch]        
    }
    return true;
}

console.log(checkPalindrome(str1,str2))