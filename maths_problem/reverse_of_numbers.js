
let num = 687
let reverse_num = 0;

while(num>0){
    reverse_num = reverse_num*10+num%10;
    num = Math.floor(num/10);
}

console.log(reverse_num);