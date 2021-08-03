/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {
    if(typeof seconds==="string"){
        throw new Error("Invalid Input")
    }
    let obj={hours:0,minutes:0,seconds:0}
    if(seconds<60){
        obj.seconds=seconds
        return obj
    }
    obj.hours=Math.floor(seconds/3600)
    seconds-=obj.hours*3600 
    obj.minutes=Math.floor(seconds/60)
    seconds-=obj.minutes*60
    obj.seconds=seconds
    return obj


};

module.exports = convertTime;
