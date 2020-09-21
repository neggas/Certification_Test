/*
    Matthieu  est élève en classe de 3ème,et il veut savoir comment résoudre une équation du second dégré. il sollicite votre aide

    Ecrivez  une fonction permettant de résoudre une équation du second dégré

 */


const Equation = (a, b, c) => {
    if (a === 0) {
        return console.log("nous traitons uniquement les equations de second degre")
    } else {
        const dis = Math.pow(b, 2) - (4 * a * c);

        if (dis === 0) {

            const x = -b / (2 * a);
            return console.log("une seul solution : " + x);
        } else if (dis > 0) {
            const solutions = {
                x1: (-b + Math.sqrt(dis)) / (2 * a),
                x2: (-b - Math.sqrt(dis)) / (2 * a)
            }
            return console.log("l'equation contient deux solution : " + solutions.x1, solutions.x2);
        } else {
            console.log("console.log pas de solution dans R");
            return null;
        }

    }
};

Equation(2, -1, -6);