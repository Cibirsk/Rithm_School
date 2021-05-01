// add whatever parameters you deem necessary - good luck!
function charAt(word,index){
    for(let i=0;i<word.length;i++){
        if(i==index){
            return word[i];
        }
    }
    return '';
}
console.log(charAt("awesome",1));