//How to get duplicate values from array code start

    const arr = [10,20,30,20,40,10,20,30];
    const duplicate_arr = [];
    const newarr = arr.reduce((acc,val)=>{

            if(!acc.includes(val)){
                acc.push(val);
            }else{
                duplicate_arr.push(val);
            }
            return acc;

    },[]) 
    console.log([... new Set(duplicate_arr)]);
