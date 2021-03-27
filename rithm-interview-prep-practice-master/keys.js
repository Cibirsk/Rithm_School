// add whatever parameters you deem necessary - good luck!
function keys(obj){
    let listKey=[];
    for(let i in obj){
        listKey.push(i);
    }
    return listKey;
}

let obj = { a: 1, b: 2, c: 3 };
console.log(keys(obj)); // ["a", "b", "c"]

let obj2 = { first: 'Matt', last: 'Lane' };
console.log(keys(obj2)); // ["first", "last"]

let obj3 = {};
console.log(keys(obj3)); // []