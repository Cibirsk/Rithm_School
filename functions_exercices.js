//PART 1

//Difference
//this function takes in two parameters and returns the difference of the two
function difference(a,b){
    return a-b;
}
console.log(difference(5,2));

//Print Day
//this function takes in one parameter (a number from 1-7) 
//and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). 
//If the number is less than 1 or greater than 7, the function should return undefined
function printDay(day){
   let week = {
       1:"lundi",
       2:"mardi"
   } 
   return week[day];
}
console.log(printDay(2));

//Last Element
//this function takes in one parameter (an array) and returns the last value in the array.
function lastElement(arr){
    return arr[arr.length -1];
}
console.log(lastElement([1,2,3,4,5]));

//Number Compare
//this function takes in two parameters (both numbers). If the first is greater than the second, 
//this function returns "First is greater". If the second number is greater than the first, 
//the function returns "Second is greater". Otherwise the function returns "Numbers are equal"
function numberCompare(a,b){
    if(a>b){
        return "a is greater than b";
    }else if(a<b){
        return "b is greater than a";
    }else{
        return "numbers are equal";
    }
}
console.log(numberCompare(7,7));

//singleLetterCount
//this function takes in two parameters (two strings). 
//The first parameter should be a word and the second should be a letter. 
//The function returns the number of times that letter appears in the word. 
//The function should be case insensitive (does not matter if the input is lowercase or uppercase). 
//If the letter is not found in the word, the function should return 0
function singleLetterCount(word,x){
    let count=0;
    for(let i=0;i<word.length;i++){
        if(word[i].toLowerCase() === x.toLowerCase()){
            count++;
        }
    }
    return count;
}
console.log(singleLetterCount("testT","T"));


//PART 2
//multipleLetterCount
//this function takes in one parameter (a string) and returns an object with
//the keys being the letters and the values being the count of the letter
