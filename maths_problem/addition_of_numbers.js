let num = 687
let total = 0;
while(num>0){
    total += num%10
    num = Math.floor(num/10);
}
console.log(total)