// add whatever parameters you deem necessary - good luck!
function stringIncludes(str,letter){
    //for(let i=0;i<str.length;i++){
    for(let i in str){
        if(str[i] === letter){
            return true;
        }
    }
    return false;
}
console.log(stringIncludes("awesome","e"));