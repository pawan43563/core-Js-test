/**
 * Write a code to generate the object structure. This structure maps the keys with
 * the corresponding types of their values
 * Do not change the structure of the function prototype
 * The code should return the structure of the object passed in as arguments
 * Check the sample outputs to understand the structure of the returned object
 */

// Input 1
// {
//   name: "Somename",
//   age: 20,
//   dob: { month: "feb", date: 28, year: "1988" },
// };
// Output
// {
//   name: 'string',
//   age: 'number',
//   dob: { month: 'string', date: 'number', year: 'string' }
// }

// Input 2
// {
//   name: "Somename",
//   age: 20,
// };
// Output
// { name: 'string', age: 'number' }

// Input 3
// { }
// Output
// { }

// Input 4
// When no input is passed, the code should return an Error
// new Error("Invalid Input")

const getObjectStructure = (obj) => {
  // write code here
  if(typeof obj==="undefined"){
    throw new Error("Invalid Input")
  }
  for(var key in obj){
    if(typeof obj[key]==="object"){
        getObjectStructure(obj[key])
    }else{
        obj[key]=typeof obj[key]
    }
}
return obj

};

// donot remove this line
module.exports = getObjectStructure;
