// add whatever parameters you deem necessary - good luck!
function totalCaps(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j] === arr[i][j].toUpperCase()){
                count++;
            }
        }
    }
    return count;
}

console.log(totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"])); // 8
console.log(totalCaps(["Elie", "Matt", "Tim"])); // 3
console.log(totalCaps(["hello", "world"])); // 0