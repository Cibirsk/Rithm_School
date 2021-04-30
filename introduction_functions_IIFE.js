//fonction IIFE sous forme d'expression de function
let calc=(function createCalculator(){
    return{
    
        add: function(a,b){
            return a+b;
        },
        subtract: function(a,b){
            return a-b;
        },
        multiply: function(a,b){
            return a*b;
        },
        divide: function(a,b){
            return a/b;
        }
    }
})();

console.log(calc.add(20,20)); // 40

//sous forme déclarative
function myCalc(){
    return{
    
        add: function(a,b){
            return a+b;
        },
        subtract: function(a,b){
            return a-b;
        },
        multiply: function(a,b){
            return a*b;
        },
        divide: function(a,b){
            return a/b;
        }
    }
}

let theCalc=myCalc();
console.log(theCalc.add(1,2));