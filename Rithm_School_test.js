function multipleLetterCount(word){
    let myObj={};
    for(let i=0;i<word.length;i++){
        if(word[i] in myObj){
            myObj[word[i]]++;
        }else{
            myObj[word[i]]=1;
        }
    }
    return myObj;
}

console.log(multipleLetterCount("hello"));