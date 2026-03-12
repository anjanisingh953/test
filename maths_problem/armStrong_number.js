// Armstrong: An Armstrong number is a number that is equal to the sum of its digits each
//  raised to the power of the number of digits in the number.
// 1634 == 1^4 + 6^4 + 3^4 + 4^4  output : true

function checkArmStrong(num){
    let original_num = num;
    let length = num.toString().length;
    let armStrong = 0;

    while(num>0){
      armStrong += Math.pow((num%10),length);
      num = Math.floor(num/10);
    }
   return original_num == armStrong;    
}

const result = checkArmStrong(1634);
console.log('ArmStrong is : ',result);

