// add whatever parameters you deem necessary - good luck!
function repeat(str, nbr){
    for(let i=0;i<nbr;i++){
        str=str.concat(str);
    }
    return str;
}
console.log(repeat("Matt",0));