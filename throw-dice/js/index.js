// Kasta en tärning tre gånger och räkna ihop det totala värdet

/** Pseudokod
 * START
    Sätt summa till 0
    Kasta tärning och returnera tärningsresultat (siffran 1-6)
    Sätta summa till tärningsresultat
    Kasta tärning och returnera tärningsresultat
    Sätt summa till summa + tärningsresultat
    Kasta tärning och returnera tärningsresultat
    Sätt summa till summa + tärningsresultat
    Skriv ut summa // Visa på skärmen för användaren
  SLUT
 */

let sum = 0;

const dice = Math.random() * 6; // Slumpar ett tal mellan 0 - 6
const diceResult = Math.ceil(dice); // Anvrundar till ett heltal, alltid uppåt
console.log("Tärningskast: " + diceResult);
sum = diceResult;
console.log("Summa just nu: " + sum);

const dice2 = Math.random() * 6;
const diceResult2 = Math.ceil(dice2);
console.log("Tärningskast: " + diceResult2);
sum = sum + diceResult2;
console.log("Summa just nu: " + sum);

const dice3 = Math.random() * 6;
const diceResult3 = Math.ceil(dice3);
console.log("Tärningskast: " + diceResult3);
sum = sum + diceResult3;

console.log("Totala summan: " + sum);
