// add whatever parameters you deem necessary - good luck!
function slice(arr,start,end){
    let newArr=[];
    let newEnd=end;
    if(end===undefined || end>arr.length){
        newEnd=arr.length;
    }
    for(let i=start;i<newEnd;i++){
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(slice([1, 2, 3, 4, 5], 0, 2)); // [1, 2]
console.log(slice([1, 2, 3, 4, 5], 2, 4)); // [3, 4]
console.log(slice([1, 2, 3, 4, 5], 2)); // [3, 4, 5]
console.log(slice([1, 2, 3, 4, 5], 2, 10)); // [3, 4, 5]