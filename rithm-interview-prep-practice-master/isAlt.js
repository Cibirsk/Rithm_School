// add whatever parameters you deem necessary - good luck!
function isAlt(str){
    let vovels="aeiou";
    let consonants="bcdfghjklmnpqrstvwxyz";
    let response;
    for(let i=0;i<str.length-1; i++){
        if(vovels.includes(str[i]) && consonants.includes(str[i+1])){
            response=true;
            i++;
        }else if(consonants.includes(str[i]) && vovels.includes(str[i+1])){
            response=true;
            i++;
        }else{
            response=false;
            break;
        }
    }
    return response;
}

console.log(isAlt("amazon")); // true
console.log(isAlt("apple")); // false
console.log(isAlt("banana")); // true