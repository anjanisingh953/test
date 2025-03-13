// An Anagram is a word or phrase formed by rearranging the letters of a different word 
// or phrase, typically using all the original letters exactly once.
const arr1 = "anagram";
const arr2 = "nagaram";

function checkAnagram(str1,str2){
    
    if(str1.length !== str2.length) return false;
    
     str1 = str1.split('').sort((a,b)=>a.localeCompare(b)).join('');
     str2 = str2.split('').sort((a,b)=>a.localeCompare(b)).join('');
    
    if(str1===str2){
        return true;
    }else{
        return false;
    }
    
}


const result = checkAnagram(arr1,arr2);
console.log(result)

