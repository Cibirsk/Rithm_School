// add whatever parameters you deem necessary - good luck!
function removeVowels(str){
    let myStr=str.split('');
    let listVowels=["a","e","i","o","u","A","E","I","O","U"];
    for(let i=0;i<myStr.length;i++) {
       for(let j=0;j<listVowels.length;j++) {
            if( myStr[i] === listVowels[j]){
                console.log(myStr);
                myStr.splice(i,1); 
            }
       }
   }
   myStr= myStr.join("");
   return myStr;
}

//console.log(removeVowels("Hello!")); // "Hll!"
console.log(removeVowels("Tomatoes")); // "Tmts"
//console.log(removeVowels("Reverse Vowels In The String")); // "Rvrs Vwls n Th Strng"
//console.log(removeVowels("aeiou")); // ""
//console.log(removeVowels("why try, shy fly?")); // "why try, shy fly?"