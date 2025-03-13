const letters ="dsfkefjweijoifj@#$%^&*99082098{}[];''dadas";
let vowels = 'aeiou';
let consotants = 'bcdfghjklmnpqrstvwxyz';
const count = {vowels:0, consotants:0}
for(let i =0; i <= letters.length; i++){
   
    if(vowels.includes(letters[i])){
    //    vowels_arr.push(letters[i])
       count.vowels += 1;  
    }

    if(consotants.includes(letters[i])){
    //    consonants_arr.push(letters[i])
       count.consotants += 1;    
    }
}
console.log(count)


//second way

// const letters = "dsfkefjweijoifj@#$%^&*99082098{}[];''dadas";

// // Regular expressions for vowels and consonants
// const vowelRegex = /[aeiou]/g;
// const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/g;

// // Use match() to find all vowels and consonants in the string
// const vowelsMatch = letters.match(vowelRegex);
// const consonantsMatch = letters.match(consonantRegex);

// console.log(vowelsMatch.length)
