// add whatever parameters you deem necessary - good luck!
function lastIndexOf(arr,value){
    for(let i=arr.length-1; i>0;i--){
            if(arr[i]=== value){
                return i;
            }    
        }
        return -1;

}
let my_arr2=[1,2,3,4,2];
console.log(lastIndexOf(my_arr2, 2));