// Balder heter en berg- och dalbana på Liseberg. För att få åka den måste man vara minst 130 centimeter lång. Programmet ska sluta i antingen i att "du får åka" eller "du får inte åka" skrivs ut. Koden kommer alltså att ha två möjliga slut.

// Pseudokod
/**
 * Sätt variabel minHeight till 130
 * Användaren matar in sin längd
 * Spara användarens längd i en variabel
 * Om användarens längd är större än 130 cm skriv ut "Du får åka"
 * Annars skriv ut du får inte åka
 */

const minHeight = 130; // Minsta längd för att få åka Balder
const userHeight = prompt("Hur lång är du?");

console.log(userHeight);

if (userHeight >= minHeight) {
  // Om användarens längd är större än minsta längd eller lika med
  console.log("Du får åka!");
} else if (userHeight < minHeight) {
  // Om användarens längd är mindre än minsta längd
  console.log("Du får inte åka");
}
