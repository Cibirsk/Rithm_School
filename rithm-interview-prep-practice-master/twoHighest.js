// add whatever parameters you deem necessary - good luck!
/*
function twoHighest(arr){
    let myArrResult=[0,0];

    for(let i=0;i<arr.length;i++){
        if(arr[i]>myArrResult[1]){
            myArrResult[1]=arr[i];
        }
    }
     for(let i=0;i<arr.length;i++){
        if(arr[i]>myArrResult[0]){
            if((myArrResult[1] > arr[i])){
                myArrResult[0]=arr[i];
            } //ajouter une condition pour le 4ème cas avec 1 2 2
        }
    }
    return myArrResult;
}
*/

//essayer un tri de tableau du petit vers le grand
//créer un tableau intermédiaire pour classer les valeurs
//et ensuite prendre arr.length-1 et arr.length-2
function twoHighest(arr){
    let myArr=[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]> myArr[0]){
            myArr.push(arr[i]);
        }
    }
    return myArr;
}
console.log(twoHighest([1, 2, 10, 8])); // [8, 10]
console.log(twoHighest([6, 1, 9, 10, 4])); // [9,10]
console.log(twoHighest([4, 25, 3, 20, 19, 5])); // [20,25]
console.log(twoHighest([1, 2, 2])); // [2, 2];
