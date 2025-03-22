function flatten_array(arr){
    let result = [];
    let stack = [...arr];
    while(stack.length){
        let next = stack.pop();

        if(Array.isArray(next)){
            stack.push(...next)
        }else{
            result.push(next)
        }
    }

    return result.reverse();
}

const myarr = [1, [2, 3], [4, [5, 6]]];
const finalresult = flatten_array(myarr)
console.log('finalresult >>>',finalresult)