/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/

const times=(str,letter)=>{
   let l=new RegExp(letter,'gi');
   return str.match(l).length
}

const frequencyCounter = (str) => {
   let obj={"a":0,"e":0,"i":0,"o":0,"u":0}
   if(typeof str==="number"){
      throw new Error("Invalid Input")
   }
   let arr=str.split("")
   arr.forEach((element)=>{
      if(obj[element]==0){
         obj[element]=times(str,element);
      }

   })
   return obj
};

module.exports = frequencyCounter;
