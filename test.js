class Student{
    constructor(fname,city,age){
        this.fname = fname;
        this.city = city;
        this.age = age;
    }
    
    static sum(){
        console.log(5+6)
    }
}

const Anjani = new Student('Anjani','Bihar',25)
const Vikas = new Student('Vikas','Bihar',25)
console.log(Anjani)
console.log(Vikas)