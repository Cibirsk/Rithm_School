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
function multipleLetterCount(word){
    let letterObject = {};
    for(let i=0;i<word.length;i++){
        if(!(word[i] in letterObject)){
            letterObject[word[i]] = 1;
        }else{
            letterObject[word[i]]++;
        }
    }
    return letterObject;
}
console.log(multipleLetterCount("hello"));

//arrayManipulation
//this function should take in at most four parameters (an array, command, location, and value).
//If the command is "remove" and the location is "end", the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
//If the command is "remove" and the location is "beginning", the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
//If the command is "add" and the location is "beginning", the function should add the value (fourth parameter) to the beginning of the array and return the array.
//If the command is "add" and the location is "end", the function should add the value (fourth parameter) to the end of the array and return the array.
function arrayManipulation(arr,command,location,value){
    if(command==="remove" && location==="end"){
        arr.pop();
    }else if(command==="remove" && location==="beginning"){
        arr.shift();
    }else if(command==="add" && location==="end"){
        arr.push(value);
    }else if(command==="add" && location==="beginning"){
        arr.unshift(value);
    }
    return arr;
}
console.log(arrayManipulation([1,2,3,4],"add","beginning",9));

//isPalindrome
//This function should take in one parameter and returns true or false if it is a palindrome. 
//As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome
//('a man a plan a canal Panama'); returns true
function isPalindrome(str){
    for(let i =0; i < str.length/2; i++){
   if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
     return false;
   }
 }
 return true;
}
console.log(isPalindrome("cic"));

//PART 3
//Rock Scissor Paper
//build a game of Rock/Paper/Scissor where through the use of the prompt function,
// a user can enter their choice and based on a random selection -
// they can either tie/win or lose against a computer.
function game(userChoice){
    let alea = Math.random();
    let computChoice;
    if(alea > 0 && alea < 0.33){
        computChoice="rock";
    }else if(alea > 0.33 && alea < 0.66) {
        computChoice="scissor";
    }else{
        computChoice="paper";
    }

    if(computChoice==="rock" && userChoice==="rock"){
        return "draw, computer picked: " + computChoice;
    }else if(computChoice==="rock" && userChoice==="scissor"){
        return "computer win, computer picked: " + computChoice;
    }else if(computChoice==="rock" && userChoice==="paper"){
        return "you win, computer picked: " + computChoice;
    }else if(computChoice==="scissor" && userChoice==="scissor"){
        return "draw, computer picked: " + computChoice;
    }else if(computChoice==="scissor" && userChoice==="paper"){
        return "computer win, computer picked: " + computChoice;
    }else if(computChoice==="scissor" && userChoice==="rock"){
        return "you win, computer picked: " + computChoice;
    }else if(computChoice==="paper" && userChoice==="paper"){
        return "draw, computer picked: " + computChoice;
    }else if(computChoice==="paper" && userChoice==="scissor"){
        return "you win, computer picked: " + computChoice;
    }else if(computChoice==="paper" && userChoice==="rock"){
        return "computer win, computer picked: " + computChoice;
    }
}

let userChoice;
while( !(userChoice==="rock" || userChoice==="scissor" || userChoice==="paper" )){
    userChoice= prompt("rock, scissor, paper ? :  ");
}
console.log(game(userChoice));