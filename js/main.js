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
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
// BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera
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
let {name,  weight} = bikes[0];
console.log(name + ' ' + weight);
let tmp = bikes[0];
for (let i = 0; i < bikes.length; i++){
    if (bikes[i].weight < tmp.weight){
    tmp = bikes[i];
    name = bikes[i].name;
    weight = bikes[i].weight;
    }
}
console.log(`la bici che pesa meno è ${name}
e il suo peso è di ${weight}kg`);