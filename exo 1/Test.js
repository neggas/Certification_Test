/*
    Ecrivez une fonction qui retourne true si et seulement si la troisième lettre d'une chaine de caractère est une consomme, qu"elle a une position pair dans l'alphabet
    et qu'elle est unique sur la chaine de caractère , sinon vous retourner false
 */


const Test = (chaine) => {
    // Ecrivez votre code ici

    let letter = chaine[2];

    return isUnique(letter, chaine) && isConsomme(letter, chaine);
};

const isUnique = (letter, chaine) => {

    let oc = 0;
    chaine.split('').forEach(el => {
        if (el === letter) oc += 1;
    });

    return oc === 1;

}

const isConsomme = (letter) => {
    return "BCDFGHJKLMNPQRSTVWXZ".toLowerCase().includes(letter.toLowerCase());
}

console.log(Test("arsaresne"));