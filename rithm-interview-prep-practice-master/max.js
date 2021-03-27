// add whatever parameters you deem necessary - good luck!
function max(arr){
    let my_max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i] > my_max){
            my_max=arr[i];
        }
    }
    return my_max;
}
console.log(max([-1, 6, 3, 2.2, -10, -4])); // 6