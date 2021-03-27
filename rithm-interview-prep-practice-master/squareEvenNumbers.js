// add whatever parameters you deem necessary - good luck!
function squareEvenNumbers(arr){
    let result=0;
    for(let i =0;i<arr.length; i++){
        if(arr[i]%2 ===0){
            result += (arr[i] * arr[i]);
        }
    }
    return result;
}

console.log(squareEvenNumbers([1, 2, 3, 4, 5])); // 20
console.log(squareEvenNumbers([1, 3, 5, 7])); // 0
console.log(squareEvenNumbers([5, 6, 7])); // 36