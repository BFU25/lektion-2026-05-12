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

function throwDice() {
  const dice = Math.random() * 6; // Slumpa ett tal mellan 0-6;
  const diceResult = Math.ceil(dice); // Avrunda uppåt så det blir ett heltal mellan 1-6
  sum = sum + diceResult;
  console.log("Tärningskast: " + diceResult);
  console.log("Summa just nu: " + sum);
}

throwDice(); // Kör vår funktion throwDice()
throwDice();
throwDice();

console.log("Den totala summan blev: " + sum);
