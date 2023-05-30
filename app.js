// console.log("Hello world");
// console.log("Welcome to class");
// console.log("Hello world");
// console.log("Welcome to class");
// console.log("Hello world");
// console.log("Welcome to class");

// JS VARIABLES AND VALUES (var, let and const )
// let x = 2;
// x = 9;

// const y = 4;
// // y = 30; can not
// console.log(x);
// console.log(y);
// Conventions and rules in naming var
// have a logical var name
// const b = "Mubarak";
// const firstName = "Mubarak";
// // compound names - camelcasing
// const lastName = "Funsho";
// illegal number, you can tsrat _ $
// const $year = 2003;
// const age = 4
// const A = 5
// console.log(AGE);
//

// let const = 67
// const let = 7

// const country = "Ghana";
// let state = "Lagos State";

// console.log(country);
// console.log(state);
// state = "Abia State";
// console.log(state);
// JS DATA TYPES - (Primitive, complex)
// Strings - text - quotes - strings

const firstName = "John";
const lastName = "Doe";
const middleName = "Owen";
const currentJob = "Product Manager";
const email = "mubarak@techstudioacademy.com";
// String Concatenation - joining of strings + Precious
const fullName = firstName + " " + middleName + " " + lastName;
console.log(fullName);
// My name is John and I work as a Product Manager
const description = "My name is " + firstName + " I work as a " + currentJob;
console.log(description);
// You can message on this email, mubarak@ts.com
const desc = "You can msg me on this email, " + email;
console.log(desc);
// Getting Characters -string[position] Mofe
console.log(firstName[2]);
console.log(currentJob[8]);

// String length - solomon
console.log(firstName.length);
console.log(description.length);

// String Methods -
// transform - Toyosi
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

// extracting parts of a string - slice substring, substr

const email2 = "mubarak@techstudioacademy.com";
//string.slice[start, end]
//
console.log(email2.slice(0, 8)); //Ebuka
console.log(email2.slice(5, 12));
console.log(email2.slice(-5, -1));
console.log(email2.substring(0, 8)); //

// string.substring(start, count of cters)
console.log(email2.substr(0, 12)); // Ola

// replace string content - replace replaceAll
console.log(email2.replace("mubarak", "funsho")); //Precious Black
console.log(email2.replaceAll("a", "£"));

// includes, indexOf, lastIndexOf, trim, concat,
// trimStart, trimend, startsWith, EndsWith

console.log(email2.includes("mubar")); // Shola
console.log(email.indexOf("a")); // Funcho
console.log(email2.lastIndexOf("a"));
const user = "       Mubarak      ";
const password = "       45256265276373    ";
console.log(user.length, password.length);

const formattedUser = user.trim(); // sheu
const formattedPassword = password.trimStart();
console.log(formattedUser.length);
console.log(formattedPassword.length);

console.log(email2.startsWith("m")); // toyin
console.log(email2.endsWith(".com"));

const job = "Frontend";
// frontend developer
console.log(job.concat(" ", "Developer", " is Rare")); //nike

// template literals // zainab
const author = "Chinua Achebe";
const book = "Things Fall Apart";
const year = 1996;
// The book Things fall apart was written by Chinua Achebe in the year 1996
const bookDescription =
  "The book " + book + " was written by " + author + " in the year " + year;
console.log(bookDescription);

// template literals -

const bookDescription2 = `The book ${book} was written by ${author} in the year ${year}`;
// My favpurite author is chinua achebe

const fav = `My favorite Author is ${author}`;
console.log(`my full name is ${fullName}`);
//Numbers - 5 6.3 45000
// Boolean - true and false
// Null - null
// Undefined - undefined
