// add whatever parameters you deem necessary - good luck!
function min(arr){
let my_min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i] < my_min){
            my_min=arr[i];
        }
    }
    return my_min;

}
console.log(min([-1, 6, 3, 2.2, -10, -4])); // -10