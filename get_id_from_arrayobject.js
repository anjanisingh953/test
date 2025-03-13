//How to get only id of all employees code start  
    
    var employee = [

        { id: 2100, name: 'President Jacqueline' },
    
        { id: 2114, name: 'Vice-president James' },
    
        { id: 3016, name: 'House-captain Otis' },
    
        { id: 4818, name: 'Prefect Finneas' }
    
    ];

  const emp_ids =    employee.map((val)=>{
        return val.id
    })

    console.log(emp_ids)