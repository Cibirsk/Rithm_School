// add whatever parameters you deem necessary - good luck!
function removeFromString(str,index,char){
    let newStr;
    newStr=str.slice((index - char),char);
    return newStr;
}
console.log(removeFromString("Elie",0,1));