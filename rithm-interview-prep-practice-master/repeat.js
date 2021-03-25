// add whatever parameters you deem necessary - good luck!
function repeat(str, nbr){
    let newStr="";
    for(let i=0;i<nbr;i++){
        newStr=newStr.concat(str);
    }
    return newStr;
}
console.log(repeat("Matt",3));