const add = function(numb1, numb2) {
  return numb1 + numb2
	
};

const subtract = function(n1, n2) {
  return n1 - n2
	
};

const sum = function(arr) {
  return arr.reduce((num, current)=>{

    return num + current

  }, 0)
	
};

const multiply = function(arr) {
  return arr.reduce((num, current)=>{

    return num * current

  })

};

const power = function(base, exponent) {
  return  Math.pow(base, exponent)
	
};

const factorial = function(index) {

  if( index === 0){
    return 1
  }else{
  let total = []
  for(let i = 1; i <= index; i++){
    total.push(i)
  }
	return total.reduce((num, current)=>{

    return num * current

  })
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
