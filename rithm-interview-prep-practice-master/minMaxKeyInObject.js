// add whatever parameters you deem necessary - good luck!
function minMaxKeyInObject(obj){
    let keyArr=[];
    let len=keyArr.length;
    for(let i in obj){
        keyArr.push(i);
    }
    return [parseInt(keyArr[0],10), parseInt(keyArr[keyArr.length-1])];
}

console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));
// [1, 10]
console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));
// [1, 4]