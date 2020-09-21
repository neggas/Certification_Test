/*
    On vous demande d'écrire une fonction qui permettra de dessiner une forme pyramidale en console

    exam :     *
              * *
             * * *
            * * * *
 */


const Pyramide = () => {
    // Ecrivez votre code ici

    let n = 5;
    let output = "";
    for (let i = 0; i < n; i++) {
        let myspace = "";
        for (let s = 0; s < (n - i - 1); s++) {
            myspace += " ";
        }
        for (let j = 1; j <= 2 * i + 1; j++) {
            output += "*";

        }
        console.log(myspace + output);
        output = "";
    }
};
Pyramide();