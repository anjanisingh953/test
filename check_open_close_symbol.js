// const str = "function sample (args) { const arr=[]; return arr; }"
// const str = "function sample(args)) { const arr=[]; return arr; }"
const str = "function sample(args) { const arr=[[[]; return arr; }"
const open_bracket = ['{','[','('];
const close_bracket = ['}',')',']'];

function checkSymbol(str){
    let close_count = 0;
    let open_count = 0;

    for(let i=0;i<str.length;i++){
        if(open_bracket.includes(str[i])) open_count += 1
        if(close_bracket.includes(str[i])) close_count += 1
    }
    
    return open_count == close_count
}


const result = checkSymbol(str)
console.log('result >>>',result);