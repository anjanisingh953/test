//Convert an array of object into array of array code start

    const arr1 = [
        {name:"Anjani",last_name:"Singh",branch:"cs",salary:"10000"},
        {name:"Ankit",last_name:"Verma",branch:"me",salary:"25000"},
        {name:"Littu",last_name:"Mohanti",branch:"it",salary:"35000"},
        {name:"Vikram",last_name:"Yadav",branch:"civil",salary:"32000"}            
    ];

    const newarrr = arr1.map((val)=>{
       return Object.values(val);
    })

    console.log(newarrr)
