/*
   On vous donne deux tableaux de nombres entiers, l'on vous demande d'écrire une fonction qui retournera
   l'union et l'intersection de ces deux tableau

    example: Union([4,8,9,-5],[5,6,9,2,3]) => union:[4,5,6,8,-5,5,6,2,3],intersection:[9]
 */


const Union = (tabA, tabB) => {
    // Ecrivez votre code ici

    tabA = tabA.sort();
    let min = tabA[0];
    let max = tabA[tabA.length - 1];
    let rezUnion = [];
    let rezIntersection = [];

    tabB.forEach(el => {
        if (el >= min || el < max) rezUnion.push(el)
        else rezIntersection.push(el);
    });

    console.log(rezUnion);
};

Union([4, 8, 9, -5], [5, 6, 9, 2, 3]);