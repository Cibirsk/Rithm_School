// add whatever parameters you deem necessary - good luck!
function includes(collection, value, index){
    if(index === undefined){
        for(let i=0; i<collection.length; i++){
            if(collection[i] === value){
                return true;
            }
        }
        return false;
    }else if(index !== undefined){
        for(let i=index; i<collection.length;i++){
            if(collection[i] === value){
                return true;
            }
        }
        return false;
    }
}
console.log(includes([1,2,3], 2,0));
console.log(includes("abcd","a",1));
console.log(includes({ 1:"a", 2:"b", 3:"c" }, "a"));