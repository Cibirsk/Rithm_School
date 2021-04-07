let instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

console.log(instructorData.name); // "Elie"
console.log(instructorData.additionalData.instructor); // true
console.log(instructorData.additionalData.favoriteHobbies[2]); // "Coding"
console.log(instructorData.additionalData.moreDetails.favoriteBasketballTeam); // "New York Knicks"
console.log(instructorData.additionalData.moreDetails.hometown.state); // "NJ"
console.log(instructorData.additionalData.moreDetails.citiesLivedIn[1]); // "Providence"

let petitDej = {
    liquide : "eau chaude",
    ingredient : {
        option : ["jus de citron", "miel"],
        cereales : {
            avoine : "complet",
            raisin : {
                texture : ["sec", "frais"],
                couleur : "noir"
            }
        }
    }
}

console.log(petitDej.ingredient.cereales.raisin.texture[1]);