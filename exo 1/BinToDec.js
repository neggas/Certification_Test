/*
   Ecrivez une fonction qui prend en paramètre un nombre binaire et retourne son équivalent en décimal
   Exemple : BinToDec(00000011) => 3

 */


const BinToDec = (number) => {
    // Ecrivez votre code ici
    return parseInt(number, 2)
};

console.log(BinToDec("11110"));