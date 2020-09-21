/*
    Ecirvez une fonction qui prend un nombre en paramètre et retourne son équivalent en binaire.
    Exemple: DecToBin(5) => 00000101
 */


const DecToBin = (number) => {
    // Ecrivez votre code ici
    return Number(number).toString(2);
};

console.log(DecToBin(30));