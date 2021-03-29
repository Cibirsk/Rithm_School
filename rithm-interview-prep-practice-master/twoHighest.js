// add whatever parameters you deem necessary - good luck!
function twoHighest(arr){
    let myArr=arr;
    let len=myArr.length;
    for(let j=0; j < myArr.length; j++){
        for(let i=0 ; i < myArr.length ; i++){
            if(myArr[i] > myArr[i+1]){
                //1ere possibilité sur le principe de "bubble sort"
                //[ myArr[i], myArr[i+1] ] = [ myArr[i+1], myArr[i] ];
                //2eme possibilité sur le même principe 
                let tmp= myArr[i];
                myArr[i] = myArr[i+1];
                myArr[i+1] = tmp;
            }
        }
    }
    return [myArr[len-2] , myArr[len-1]];
}
console.log(twoHighest([1, 2, 10, 8])); // [8, 10]
console.log(twoHighest([6, 1, 9, 10, 4])); // [9,10]
console.log(twoHighest([4, 25, 3, 20, 19, 5])); // [20,25]
console.log(twoHighest([1, 2, 2])); // [2, 2];
