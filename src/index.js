module.exports = function reverse (n) {
    let i = 0;
  let result = '';
  str = n.toString();

  if (str[0] === '-'){
      str = str.slice(1);
  } 

  while (i < str.length) { 
    result = str[i] + result;
    i++;
  }
  return Number(result);
}
