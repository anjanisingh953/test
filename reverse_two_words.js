const str = "ABCD EFGH"  //DCBA HGFE

const arr = str.split(" ")

const result = arr.map((el)=>el.split('').reverse().join(''))
console.log(result.join(' '));