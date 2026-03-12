function fibo(num) {
  let n1 = 0; let n2 =1; let nextTerm;
  const arr = [];
  for(let i = 0; i<num; i++){
//      arr.push(n1);
        arr[i] = n1;
        nextTerm = n1+n2;
        n1 = n2;
        n2 = nextTerm;
  }
  return arr;
}
const result = fibo(5)
console.log('result',result);