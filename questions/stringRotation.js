


const rotateString = (str, n, direction) => {
  // str = input string
  // n = number of rotations
  //
  // input str = random ,1, right
  // output mrando
  if(typeof str!=="string"){
    throw new Error("Invalid Input")
  }
  let dir=['left','right']
  if(!dir.includes(direction)){
    throw new Error("Invalid Direction")
  }


  if(direction==="left"){
    return str.substr(n)+str.substr(0,n)
  }
  if(direction==="right"){
    let str1=str.split("").reverse().join("");
    return str1.substr(0,n)+str.substr(0,str.length-n)
  }


};

module.exports = rotateString;
