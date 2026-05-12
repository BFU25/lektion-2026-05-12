// Detta är en kommentar och kommer inte tolkas av webbläsaren som kod

console.log("Hello World!"); // Detta är en textsträng

let myName = "Christoffer"; // Sträng
let age = 37; // Nummer
const isTeacher = true; // Boolean (sant eller falskt)

let greeting = "Hej jag heter " + myName + " och är " + age + " år";

console.log(greeting);

myName = "Ada";

if (myName == "Christoffer") {
    console.log("Hej Christoffer!");
} else {
    console.log("Du heter inte Christoffer");
}

if (age > 40) {
    // > större än, < mindre än
    console.log("Ung i hjärtat!");
} else if (myName == "Ada" && age == 37) {
    // == jämförelse, && = och (här måste båda uttrycken vara sanna)
    console.log("Precis rätt!")
}