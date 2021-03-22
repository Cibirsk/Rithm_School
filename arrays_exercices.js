let people = ["Greg","Mary", "Devon", "James"];

//iterate and console.log the array
for(let i=0; i<people.length; i++){
    console.log(people[i]);
}

//remove "Greg"
people.shift();
console.log(people);

//remove "James"
people.pop();
console.log(people);

//add "Matt" to the front
people.unshift("Matt");
console.log(people);

//add "Stephane" to the end
people.push("Stéphane");
console.log(people);

//Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop
for(let i=0; i<people.length; i++){
    console.log(people[i]);
    if(people[i] === "Mary"){
        break;
    }
}

//make a copy of the array using slice. The copy should NOT include "Mary" or "Matt"
let copyPeople = people.slice(2,4);
console.log(copyPeople);

//gives the indexOf where "Mary" is located (return -1 if not found)
console.log(people.indexOf("Mary"));

people = ["Greg","Mary", "Devon", "James"];

//remove "Devon" from the array and add "Elizabeth" and "Artie".
people.splice(2,1,"Elizabeth","Artie");
console.log(people);

//variable called withBob and set it equal to the people array concatenated with the string of "Bob"
let withBob = people.concat("Bob");
console.log(withBob);