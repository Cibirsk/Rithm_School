// add whatever parameters you deem necessary - good luck!
function indexOf(arr, value){
    for(let i=0; i<arr.length;i++){
        if(arr[i]=== value){
            return i;
        }    
    }
    return -1;
}

let my_arr=[5,10,15,20];
console.log(indexOf(my_arr, 20));