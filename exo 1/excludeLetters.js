/*
    yao veut éliminez tous les lettres de l'alaphabet qui ont une position impaire dans une chaine de caractère
     Ecrivez la fonction qui permetra à yao d'effectuer cette action
    la fonction prend en paramètre une chaine de caractère et retourne une chaine de caractère
*/


const excludeLetters = (chaine) => {
    let rez = '';
    for (let i = 0; i < chaine.length; i++) {
        if (i % 2 !== 0) {
            rez += chaine[i];
        }
    }

    return rez;
};

console.log(excludeLetters("je suis arsene"));