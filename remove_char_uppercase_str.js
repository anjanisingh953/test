const str = "This%^is&*an^^##$sentence";
const regex = /\W/g;

const result = str.split(regex);
const arr = result.filter((val) => val !== '');
console.log('arr ', arr)
const finalarr = arr.map((val) => val[0].toUpperCase() + val.slice(1));
console.log(finalarr.join(' '));
