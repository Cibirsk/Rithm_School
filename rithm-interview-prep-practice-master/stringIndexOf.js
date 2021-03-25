// add whatever parameters you deem necessary - good luck!
function stringIndexOf(str,letter){
    for(let i=0;i<str.length;i++){
        if(str[i]===letter){
            return i;
        }
    }
    return -1;
}
console.log(stringIndexOf("awesome","e"));