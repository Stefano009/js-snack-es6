// // Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

// let bikes = [ 
//     {
//         name : 'rossa',
//         weight : 50
//     },
//     {
//         name : 'viola',
//         weight : 40
//     },
//     {
//         name : 'verde',
//         weight : 30
//     },
//     {
//         name : 'blu',
//         weight : 4
//     }
// ]
// let tmp = bikes[0];
// for (let i = 0; i < bikes.length; i++){
//     if (bikes[i].weight < tmp.weight){
//     tmp = bikes[i];
//     }
// }
// // console.log(tmp);

// // Crea 10 oggetti che rappresentano una zucchina, 
// //  indicandone per ognuno varietà, peso e lunghezza. 

// let zucchine = [
//     {
//         variety : 'grossa',
//         weight : 150,
//         lenght : 15
//     },
//     {
//         variety : 'grossa',
//         weight : 200,
//         lenght : 16
//     },
//     {
//         variety : 'grossa',
//         weight : 180,
//         lenght : 17
//     },
//     {
//         variety : 'lunga',
//         weight : 90,
//         lenght : 20
//     },
//     {
//         variety : 'lunga',
//         weight : 80,
//         lenght : 21
//     },
//     {
//         variety : 'lunga',
//         weight : 120,
//         lenght : 22
//     },
//     {
//         variety : 'lunga',
//         weight : 110,
//         lenght : 23
//     },
//     {
//         variety : 'corta',
//         weight : 50,
//         lenght : 10
//     },
//     {
//         variety : 'corta',
//         weight : 60,
//         lenght : 9
//     },
//     {
//         variety : 'corta',
//         weight : 40,
//         lenght : 8
//     }
// ]
// //  Calcola quanto pesano tutte le zucchine.
// let totalWeight = 0
// //avrei potuto usare banalmente anche il ciclo for in 9
// for (let i = 0; i < zucchine.length; i++){ //f9r ( let key in zucchine)
//     totalWeight = totalWeight + zucchine[i].weight;
// }
// console.log(totalWeight)
// esercizi della mattina
/*  */


// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
let bikes = [ 
    {
        name : 'rossa',
        weight : 12
    },
    {
        name : 'viola',
        weight : 20
    },
    {
        name : 'verde',
        weight : 8
    },
    {
        name : 'blu',
        weight : 16
    }
]
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const button = document.getElementById('lighterBike');
button.addEventListener( "click", () => { // BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera

    let {name,  weight} = bikes[0];
    let tmp = bikes[0];
    for (let i = 0; i < bikes.length; i++){
        if (bikes[i].weight < tmp.weight){
        name = bikes[i].name;
        weight = bikes[i].weight;
        console.log(name);
        console.log(weight);
        }
}
return console.log(`la bici che pesa meno è ${name}
    e il suo peso è di ${weight}kg`);//ricordare di non ritornare mai un console log, solitamente una cosa del genere non ha senso perchè, è preferibile ritornare una variabile che poi vai a stampare con console log. in questo caso funziona ma logicamente sbagliato
}
);





//Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// let teams = [
//     { teamName : 'Inter', points : 0, foulsTaken : 0},
//     { teamName : 'Juventus', points : 0, foulsTaken : 0},
//     { teamName : 'Milan', points : 0, foulsTaken : 0},
//     { teamName : 'Napoli', points : 0, foulsTaken : 0},
//     { teamName : 'Reggina', points : 0, foulsTaken : 0},
//     { teamName : 'Empoli', points : 0, foulsTaken : 0},
//     { teamName : 'Sampdoria', points : 0, foulsTaken : 0},
//     { teamName : 'Sassuolo', points : 0, foulsTaken : 0},
//     { teamName : 'Genoa', points : 0, foulsTaken : 0}
// ]
// let {teamName, points, foulsTaken} = teams[0];
// let finalRanking = []
// // Generare numeri random al posto degli 0 nelle proprietà:
// // Punti fatti e falli subiti.
// for (let i = 0; i < teams.length; i++) {
//     // Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
//     teamName = teams[i].teamName
//     points = rndGenerator()
//     foulsTaken = rndGenerator()
//     tmp = {
//         teamName,
//         points,
//         foulsTaken
//     }
//     finalRanking.push(tmp)
// }
// console.log(finalRanking)


// //funzione di generazione di numeri random
// function rndGenerator() {
//     return Math.floor(Math.random() * (90 - 30) + 30);
// }
