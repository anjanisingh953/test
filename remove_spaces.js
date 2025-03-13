const str= "This                                   is      testing";

//first split by " "(space)
const newstr = str.split(" ").filter((val)=>{
        return val !== ""
});

console.log(newstr.join(" "));