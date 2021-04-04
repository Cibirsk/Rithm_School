try {
    if(Math.random() >= .5) {         //condition génération d'une erreur
        throw "Let's make an error!"; //création volontaire d'une erreur
    }
    console.log("Whew...we made it."); //accessible si pas d'erreur
    console.log("We can only get here if the random number is less than .5.");//idem
} catch(e){
    console.log("The error is ", e); //si erreur, le "throw" envoie à "e" le type d'erreur
    console.log("We can only get here if an error was thrown. (Random number is greater than .5).");
}

console.log("Moving on....."); //le try catch permet au code suivant de s'exécuter


//utilisation de finally
try {
    // let's randomly try to throw an error
    if(Math.random() >= .5){
        // The following code will throw:
        // Uncaught TypeError: undefined is not a function(…)
        undefined();
    }
    console.log("Whew, we made it");
} catch(e){
   console.log("We didn't make it. The error message is", e.message);
} finally {
   console.log("No matter what we will see this statement");
}

