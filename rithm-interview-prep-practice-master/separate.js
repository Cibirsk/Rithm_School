// add whatever parameters you deem necessary - good luck!
function separate(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i] === "cat"){
            newArr.push("cat");
        }
    }
    
    for(let i=0;i<arr.length;i++){
        if(arr[i] === "water"){
            newArr.push("water");
        }
    }
    
    for(let i=0;i<arr.length;i++){
        if(arr[i] === "dog"){
            newArr.push("dog");
        }
    }
    return newArr;
}


console.log(separate(['dog','cat','water'])); // ['cat','water','dog']

console.log(separate(['dog','cat','water','cat'])); // ['cat', 'cat', 'water', 'dog'])

console.log(separate(['cat','cat','water','dog','water','cat','water','dog']));
// ['cat','cat','cat','water','water','water','dog','dog']

console.log(separate(['cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat','cat',
    'dog','water','water','water','water','water',
    'water','water','water','water','water','water',
    'water','water','water']));

 /* ['cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat','cat',
    'water','water','water','water','water',
    'water','water','water','water','water','water',
    'water','water','water', 'dog']
*/