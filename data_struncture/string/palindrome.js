
const str = 'dedded';
let result = true
function anagram(str){
    let end = str.length -1;
    for(let i = 0; i<str.length; i++){        
        if(str[i] !==str[end]){
            result = false;               
        }        
        end--
    }
    return result;
}

const finalResult = anagram(str);

console.log(finalResult);
