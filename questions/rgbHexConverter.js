/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */



const hexcalculation=(value)=>{


    let first=Math.floor(value/16);
    let second=value%16;

    return first.toString(16)+second.toString(16)
} 

const rgbToHexConversion = (...rgbValues) => {
    if(rgbValues.length!=3){
        throw new Error("Invalid Input")
    }
    rgbValues.forEach((element)=>{
        if(typeof element==="string" || element>255){
            throw new Error("Invalid Input")
        }
    })
    return "#"+hexcalculation(rgbValues[0])+hexcalculation(rgbValues[1])+hexcalculation(rgbValues[2])

};

module.exports = rgbToHexConversion;
