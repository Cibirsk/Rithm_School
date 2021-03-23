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
    return arr[length -1];
}
console.log([1,2,3,4]);