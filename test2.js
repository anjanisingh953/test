const arr = [2,3,4,2,4,5,6,7,8,9,11,4,9]
const duplicate = [];


arr.reduce((acc,val)=>{

    if(!acc.includes(val)){
        acc.push(val);
    }else{
        duplicate.push(val);
    }
    return acc;

},[])


console.log(duplicate)