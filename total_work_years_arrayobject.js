// How to sum of all employees' working years code start
  	
    var employees = [
        {   
          id: 111,    
          name: "Chelsea Foster",
          years: 7,    
        },    
        {
          id: 102,
          name: "Aggie Sparling",
          years: 13,
        },
        {
          id: 123,
          name: "Timmy Matthews",
          years: 23,
        }
      ];
      
      const total_years = employees.reduce((acc,val)=>{
                return acc+val.years;
      },0)

      console.log(total_years)