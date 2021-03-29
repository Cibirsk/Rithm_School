// add whatever parameters you deem necessary - good luck!
function pluck(arr,key){
    let arrKey=[];
    for(let i=0;i<arr.length;i++){
        arrKey.push(arr[i][key]);
    }
    return arrKey;
}


console.log(pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name'));
// ["Tim", "Matt", "Elie"]

console.log(pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, 
{ name: "Elie" }],'isBoatOwner'));
// [true, false, undefined]

