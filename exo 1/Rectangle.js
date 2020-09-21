/*
    On vous demande d'écrire une fonction qui permettra de dessiner une forme rectangulaire en console

    exam : ------------------
          |                  |
          |                  |
          |                  |
          --------------------
 */


const Rectangle = () => {
    // Ecrivez votre code ici

    let r = "";


    for (let i = 1; i <= 100; i++) {
        if (i % 10 === 0)
            r += "\n"
        else
            r += "#";
    }

    return r;
};

console.log(Rectangle());