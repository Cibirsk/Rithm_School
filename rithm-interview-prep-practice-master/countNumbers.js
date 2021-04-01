// add whatever parameters you deem necessary - good luck!
function countNumbers(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if((parseInt(arr[i],10)+1) <= 0 || (parseInt(arr[i],10)+1) >= 0){
        count++; 
       }
    }
    return count;
}

console.log(countNumbers(['a','b','3','awesome','4'])); // 2
console.log(countNumbers(['32', '55', 'awesome', 'test', '100'])); // 3
console.log(countNumbers(`[]`)); // 0
console.log(countNumbers(['4','1','0','NaN'])); // 3
console.log(countNumbers(['7', '12', 'a', '', '6', '8', ' '])); // 4