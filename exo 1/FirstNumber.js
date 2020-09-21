/*
    Dans cet exercice, on vous donne un interval de nombres et vous devrez retourner la liste des nombres premiers compris dans cet interval

    example: FirstNumber(5,18) => [5,7,11,13,17]
 */


const FirstNumber = (numb1, numb2) => {

    let numbers = [];
    let nbrPremier = [];
    for (let i = numb1; i <= numb2; i++) {
        numbers.push(i);
    }

    numbers.forEach(el => {
        if (isPremier(el))
            nbrPremier.push(el);
    })

    return nbrPremier;

};

const isPremier = (nbr) => {
    for (let j = 2; j < nbr; j++)
        if (nbr % j === 0) return false;
    return nbr > 1;
}

console.log(FirstNumber(5, 18));