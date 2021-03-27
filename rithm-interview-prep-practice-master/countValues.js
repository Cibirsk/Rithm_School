// add whatever parameters you deem necessary - good luck!
function countValues(arr,value){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===value){
            count++;
        }
    }
    return count;
}

console.log(countValues([4,1,4,2,3,4,4], 4)); // 4
console.log(countValues([4,1,4,2,3,4,4], 100)); // 0
console.log(countValues([], 1)); // 0