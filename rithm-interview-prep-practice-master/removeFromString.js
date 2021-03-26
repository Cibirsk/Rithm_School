// add whatever parameters you deem necessary - good luck!
function removeFromString(str,index,char){
    let newStr= str.split('');
    newStr.splice(index,char);
    newStr=newStr.join("");
    return newStr;

}
console.log(removeFromString("Elie",2,2));