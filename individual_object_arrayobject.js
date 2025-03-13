// Get a object list of Intern member code start

    var members = [
                    {
                        id: 111,
                        name: "Chelsea Foster",
                        position: "Intern",
                    },
                    {
                        id: 102,
                        name: "Aggie Sparling",
                        position: "Employee",
                    },
                    {
                        id: 123,
                        name: "Timmy Matthews",
                        position: "Intern",
                    },
                    {
                        id: 66,
                        name: "Emmet Foster",
                        position: "Employee",
                    }
                  ];

    const member_result = members.filter((member)=>{
        return member.position == 'Intern'
    })

    console.log(member_result);
