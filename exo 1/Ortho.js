/*
    Dans cet exercie , l'on vous donne un  tableau d'object, correspondant  à des positions x et y sur le repère orthogonal,
     l'on vous demande de retournez les deux points les plus proches sur le repère

     example: Ortho([{x:5,y:9},{x:-5,y:5},{x:2,y:1}] => [{x:5,y:9},{x:2,y:1}];
 */


const Ortho = (tab) => {
    // Ecrivez votre code ici
    let t = [];
    let sous = [];
    let resultat = [];

    for (let items of tab) {
        t.push(Object.values(items));
    }





    for (let table of t) {
        if (table.length === 2) {
            sous.push(table[0] - table[1]);
        } else {
            return console.log("ERREUR LES TABLEAU DOIVENT CONTENIR EXACTEMENT DEUX POINTS");
        }
    }

    sous = sous.sort();


    if (sous[0] == sous[1]) {

        for (let table of t) {

            if (table[0] - table[1] == sous[0] || table[0] - table[1] == sous[1] || table[0] - table[1] == sous[2]) {
                resultat.push(table);
            }
        }

    } else {

        for (let table of t) {
            if (table[0] - table[1] == sous[0] || table[0] - table[1] == sous[1]) {
                resultat.push(table);
            }
        }

    }


    let tempRez = resultat.sort().reverse();
    let rez = [];

    tempRez.forEach(el => {
        rez.push({ x: el[0], y: el[1] });
    })

    console.log(rez);
};

Ortho([{ x: 5, y: 9 }, { x: -5, y: 5 }, { x: 2, y: 1 }]);