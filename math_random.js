// utilisation de Math.random pour créer un chiffre aléatoire entre 0 et 1
let a = Math.random();
if(a < 0.5){
    console.log(`inférieur à 0.5, le chiffre est: ${a}`);
}else{
    console.log(`supérieur à 0.5, le chiffre est: ${a}`);
}