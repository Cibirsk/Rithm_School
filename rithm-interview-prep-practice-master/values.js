// add whatever parameters you deem necessary - good luck!
function values(theValues){
    let arrValues=[];
    for(let i in theValues){
        arrValues.push(theValues[i]);
    }
    return arrValues;
}

let obj4 = { a: 1, b: 2, c: 3 };
console.log(values(obj4)); // [1,2,3]

let obj5 = { first: 'Matt', last: 'Lane', isDogOwner: true };
console.log(values(obj5)); // ["Matt", "Lane", true]

let obj6 = {};
console.log(values(obj6)); // []