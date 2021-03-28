// add whatever parameters you deem necessary - good luck!
function entries(obj){
    let arr=[];
    for(let i in obj){
        arr.push([i,obj[i]]);
    }
    return arr;
}

let obj11 = { a: 1, b: 2, c: 3 };
console.log(entries(obj11));
// [["a",1], ["b",2], ["c",3]]

let obj22 = { first: 'Matt', last: 'Lane', isDogOwner: true };
console.log(entries(obj22));
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]

let obj44 = {};
console.log(entries(obj44)); // []
