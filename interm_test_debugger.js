function multiples(x,n){
    let arr=[];
    for(let i=1;i<=n;i++){
        arr.push(i*x);
    }
    return arr;
}

console.log(multiples(3, 4)); // [3, 6, 9, 12]
console.log(multiples(2, 5)); // [2, 4, 6, 8, 10]