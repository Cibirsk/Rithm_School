// add whatever parameters you deem necessary - good luck!
function findTheDuplicate(arr){
   let myNumb;
   for(let i of arr){
       for(let j of arr){
           j++;
           if(i === j){
               myNumb=i;
           }
       }
   }
   return myNumb;
}

console.log(findTheDuplicate([1,2,1,4,3,12])); // 1
console.log(findTheDuplicate([6,1,9,5,3,4,9])); // 9
console.log(findTheDuplicate([2,1,3,4])); // undefined