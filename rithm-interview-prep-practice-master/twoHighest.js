// add whatever parameters you deem necessary - good luck!
function twoHighest(arr){
    /*
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
    */
    let myArr1=arr;
    let myArr2=arr;
    for(let i=0;i<myArr1;i++){
        if(arr[i] < arr[i+1]){
            myArr1.splice(i+1,1);
        }
    }
    return myArr1;
}


console.log(twoHighest([1, 2, 10, 8])); // [8, 10]
console.log(twoHighest([6, 1, 9, 10, 4])); // [9,10]
console.log(twoHighest([4, 25, 3, 20, 19, 5])); // [20,25]
console.log(twoHighest([1, 2, 2])); // [2, 2];

let testArr=[1,2,10,8];
testArr.splice(0,1);
console.log(testArr);
