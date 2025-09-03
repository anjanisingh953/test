let num = 687
let total = 0;
let i = 0
while(num>0){
    total += num
    num = Math.floor(num/10);
    console.log('hello',i)
    i++;
}
console.log(total)