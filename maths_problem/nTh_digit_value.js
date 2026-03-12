
var countDigitOne = function(n) {
    let digit = '';

    for (let i = 1; i <= n; i++) {
     digit +=i;
      if(i==n){
        return digit[n-1];
      }
    }
    
}

const result = countDigitOne(5);
console.log(result);