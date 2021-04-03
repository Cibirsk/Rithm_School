// add whatever parameters you deem necessary - good luck!
function findTheDuplicate(arr){
   for(let i=0;i<=arr.length;i++){
       for(let j=i+1;j<=arr.length;j++){
           if(arr[i]===arr[j]){
               return arr[i];
           }
       }
   }
}

console.log(findTheDuplicate([1,2,1,4,3,12])); // 1
console.log(findTheDuplicate([6,1,9,5,3,4,9])); // 9
console.log(findTheDuplicate([2,1,3,4])); // undefined