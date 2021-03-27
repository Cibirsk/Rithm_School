// add whatever parameters you deem necessary - good luck!
function includes(collection, value, index){
    if(index === undefined){
        for(let i=0; i<collection.length; i++){
            if(collection[i] === value){
                return true;
            }
        }
        return false;
    }
}
console.log(includes([1,2,3], 1));