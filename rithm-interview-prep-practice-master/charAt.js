// add whatever parameters you deem necessary - good luck!
function charAt(str,number){
    if(number > str.length){
        return "";
    }else{
        return str[number];
    }
}
console.log(charAt("awesome", 12));