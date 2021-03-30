// add whatever parameters you deem necessary - good luck!
function stringFromObject(){

}

console.log(stringFromObject({ a: 1, b: '2' }));
// "a = 1, b = 2"


console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }));
// "name = Elie, job = Instructor, isCatOwner = false"


stringFromObject({}); // ""