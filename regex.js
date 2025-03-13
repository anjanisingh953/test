const str = "anjanisingh@gmail.com"
const regex = /[a-z]@gmail.com/gi

const result =  str.match(regex);
console.log(result)


/*

There are two flags available in regex
1.g (global) /patter/g
2.i (insensitive) /patter/i

Note: We can use the above flags, together in a patter i.e /pattern/gi
//Functions in regex
There are some functios available to match the strings with our created regex patter
1.exec()
2.test()
3.match()
4.search()
5.replace()
6.split()
1.exec() : This function will return an array for the matched OR null for unmatch pattern
syntax: reg.exec(str);

2.test() : It returns true OR false
syntax: reg.test(str);

3.match() : It returns an array for match results OR null for unmatch results
syntax: str.match(regex);

4.match() : It returns index of first match OR -1
syntax: str.search(regex);

5.replace() : It returns new replaced string with all the replacement
syntax: str.replace(regex,'Expected_Str');

6.split() : It returns an array if match
syntax: str.replace(regex);


//Metacharacter symbol in regex

1. ^ha    // starts with ha  syntax : /^harry/
2. ry$    // ends with ry syntax : /harry$/
3. .      // dot means any 1 character  syntax : /h.rry/
4. *      // * matches any 0 OR more character  syntax : /h*rry/
5. ?      // ? after any character means that character is optional. that char may be or may not be availabe in that string. syntax : /ha?rry/
6. \      // \ before any character means please match that character  syntax : /h\arry/
7. |      // | means OR,  We can use [] instead of | for multiple search Ex: J|P|C ,  [JPC] both are same
8. +      // returns 1 or more match character Ex /[0-9]+/ Means select all 0-9 character in a string str: hello123anjani output: 123

// Shorthand metacharacter in regex

1. /\w/      //It match a-z,0-9,A-Z
2. /\W/      //It match space,-,? (All special character)
3. /\d/      //It match numeric value
4. /\D/      //It match all character except Numeric value
5. /\n/      //It match new line
6. /\v/      //It match tab
7. /\s/      //It match all spaces
8. /\S/      //It matches where a string contain any Non-White space    
 

//Character set in regex
Definition : We can create a set of characters with the help of [] square bracket is known as character set.

1. /h[a-z]rry/   //can be any character from a to z. - Hypen symbol indicates range
2. /h[ryc]rry/   //can be r,y, or c only.
3. /h[^ryc]rry/  //can not be r,y, or c. ^ caret symbol indicates "Not"

Note : If we use ^ symbol in [] then it indicates "not" ex [^abc] means not abc


Quantifiers in regex 
Definition: To specify the quantity of "a single character occurence" in a pattern, we use {} curly braces symbol for quantifiers.

Syntax: 
1. /har{2}y/     // r can occurs exact 2 times in a str
2. /har{0,2}y/   // r can occurs exactly o To 2 times (0times OR 1tims Or 2times) . Here {0,2} Means {min,max}
 


Grouping in regex
Defintion: We use grouping to create a group of character to match in a str. We use () parenthesis symbol for groupings.

Syntax: 
1. /(har)ry/     // A string must have har before ry Ex: harry
2. /(har){2}/    //har should be 2 times in a string  Ex : "harhar mahadev"
3. /(har){2}([0-9]r){3}/  //har should be 2times and 0to9 with r character 3times in a string Ex: harhar1r2r3r



*/