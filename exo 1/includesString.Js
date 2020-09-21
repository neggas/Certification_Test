// on vous donne deux chaines de caractéres .
// et l'on vous demande de retounnez dans un tableau la liste des lettres qui se retrouve dans les deux chaines de caractères

// exemple: includesString('salut','bonjour') => ['u'], includesString('maman','moniqua') => ['m','a','n']


const includesString = (chaineA, chaineB) => {
    // écrivez votre code ici
    let rez = [];
    chaineA.split('').forEach(el => {
        if ((chaineB).includes(el)) {

            if (rez.indexOf(el) < 0)
                rez.push(el);
        }
    });

    console.log(rez)
};

includesString('maman', 'moniqua');