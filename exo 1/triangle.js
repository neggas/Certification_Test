/*
    On vous demande d'écrire une fonction qui permettra de dessiner une forme Triangulaire en console

    exam : *
           * *
           * * *
           * * * *
           * * * * *
           * * * * * *
 */


const Triangle = () => {
    // Ecrivez votre code ici

    let chaine = '';
    for (let m = 1; m <= 6; m++) {

        for (let n = 1; n <= m; n++) {
            chaine += '*';
        }

        chaine += '\n';

    }

    console.log(chaine);
};

Triangle();