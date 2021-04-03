// add whatever parameters you deem necessary - good luck!
function separate(arr){

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