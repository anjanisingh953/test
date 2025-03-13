//Count duplicate values from array code start

    
    const arr2 = [10,20,30,20,40,10,20,30];
    
    // FIRST WAY
    var newarr2 = arr2.reduce(function(acc, val){
        if (!acc[val]) {
            acc[val] = 1;
        } else {
            acc[val]++;
        }
        return acc;
    }, {});
    console.log(newarr2); 


       //SECOND WAY 

    // const newarr2 = arr2.reduce((acc,val)=>{

    //         if(acc[val] == undefined){
    //             acc[val] = 1;
    //         }else{
    //             acc[val]++;
    //         }
    //         return acc;
    // },{}) 
    // console.log(newarr2);        