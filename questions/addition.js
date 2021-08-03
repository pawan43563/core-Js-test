/* Addition function takes a list of numbers and returns the sum
1. Take anything between 1 to n arguments and return sum 
2. Throw and error with message "Invalid Input" when no arguments are passed. 
3. Detect non numeric input and throw an error with message "Invalid Input"
*/
const add=(a,b)=>{
  return a+b
}

const addition = (...numbers) => {
  // all your code
  if(numbers.length===0 ) {
    throw new Error("Invalid Input");
  }
  numbers.forEach((e)=>{
    if(typeof e==="string"){
      throw new Error("Invalid Input");
    }
  })
  return numbers.reduce(add,0)

};

module.exports = addition;
