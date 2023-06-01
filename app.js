// console.log("Hello world");
// console.log(2 + 2);
// console.log("Welcome to class");
// console.log("Hello world");
// console.log("Welcome to class");
// console.log("Hello world");
// console.log("Welcome to class");

// JS VARIABLES AND VALUES (var, let and const )
// let x = 2;
// x = 9;

// const y = 4;
// y = 30; can not
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

// const firstName = "John";
// const lastName = "Doe";
// const middleName = "Owen";
// const currentJob = "Product Manage
// const email = "mubarak@techstudioacademy.com";
// String Concatenation - joining of strings + Precious

// const firstName = "Preciousr";
// const lastName = "Doe";
// const fullname = firstName + lastName;
// console.log(fullname);

// const fullName = firstName + " " + middleName + " " + lastName;
// console.log(fullName);
// My name is John and I work as a Product Manager
// const description = "My name is " + firstName + " I work as a " + currentJob;
// console.log(description);
// You can message on this email, mubarak@ts.com
// const desc = "You can msg me on this email, " + email;
// console.log(desc);
// Getting Characters -string[position] Mofe
// console.log(firstName[2]);
// console.log(lastName[0]);
// console.log(firstName[2]);
// console.log(currentJob[8]);
// console.log(firstName.length);

// String length - solomon
// console.log(firstName.length);
// console.log(description.length);

// // String Methods -
// // transform - Toyosi
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());
// console.log(firstName.toUpperCase());
// console.log(lastName.toLowerCase());

// // extracting parts of a string - slice substring, substr

// const email2 = "mubarak@techstudioacademy.com";
// //string.slice[start, end]
//Precious PREC
// console.log(firstName.slice(0, 3));
// console.log(firstName.substring(0, 3));
// //
// console.log(email2.slice(0, 8)); //Ebuka

// console.log(email2.slice(5, 12));
// console.log(email2.slice(-5, -1));
// console.log(email2.substring(0, 8)); //

// // string.substring(start, count of cters)
// console.log(email2.substr(0, 12)); // Ola
//console.log(firstName.substr(1, 45));

// // replace string content - replace replaceAll
// console.log(email2.replace("mubarak", "funsho")); //Precious Black
// console.log(email2.replaceAll("a", "£"));
// console.log(firstName.replace("r", "q"));
// console.log(firstName.replaceAll("r", "q"));

// // includes, indexOf, lastIndexOf, trim, concat,
// // trimStart, trimend, startsWith, EndsWith

// console.log(email2.includes("mubar")); // Shola
// console.log(firstName.includes("Pre"));
// console.log(email.indexOf("a")); // Funcho
// console.log(firstName.indexOf("r"));
// console.log(firstName.lastIndexOf("r"));
// console.log(email2.lastIndexOf("a"));
// const user = "       Mubarak      ";
// const password = "       45256265276373    ";
// console.log(user.length, password.length);

// const formattedUser = user.trim(); // sheu

// const formattedPassword = password.trimStart();
// console.log(formattedUser.length);
// console.log(formattedPassword.length);

// console.log(email2.startsWith("m")); // toyin
// console.log(email2.endsWith(".com"));

// const job = "Frontend";
// // frontend developer
// console.log(job.concat(" ", "Developer", " is Rare")); //nike

// // template literals // zainab
// const author = "Chinua Achebe";
// const book = "Things Fall Apart";
// const year = 1996;
// // The book Things fall apart was written by Chinua Achebe in the year 1996
// const bookDescription =
//   "The book " + book + " was written by " + author + " in the year " + year;
// console.log(bookDescription);

// // template literals -

// const bookDescription2 = `The book ${book} was written by ${author} in the year ${year}`;
// // My favpurite author is chinua achebe

// const fav = `My favorite Author is ${author}`;
// console.log(`my full name is ${fullName}`);
//Numbers - 5 6.3 45000
// math operators - + - * / ** %
// console.log(6 % 2); // 0
// console.log(5 % 2); // 1

// console.log(5 / 2); // 2.5
//  order of operations - bedmas,
// //
// console.log(6 / 3 + 5); // 7 -2

// let balance = 500;
// const t1 = 20;
// const t2 = 100;
// const d1 = 200;

//console.log(5 + 6 * 2 - 3); // 5 + 12 - 3 // 17 -3 14
// -1 3 3  5 - 6
// DRY ()

let total = 50;
// increase the value of total by 10
// total = total + 10;
// total += 10;
// total += 5;

// decrease the val of total by 12
// total = total - 12;
// total -= 12;
// total -= 10;

// console.log(total);

// let post = 40;
// post += 15;
// post -= 15;
// post *= 2;
// post /= 5;

// console.log(post);

// let likes = 0;
// likes += 1;
// likes += 1;
// likes += 1;
// likes -= 1;
// likes++;
// likes--;
// likes++;
// likes--;

// console.log(likes);
// const discount = 0.1;
// let toatal = total + 10

// NaN - not a number

// console.log(5 ** "hello"); //NaN

// // Boolean - true and false
// console.log(true);
// console.log(false);

// const country = "Togo";
// const continent = "Africa";
// let population = 100067788070;

// console.log(country, continent, population);
// const isIsland = false;
// const language = "French";

// population /= 2;
// //console.log(population / 2);
// console.log(population);
// population++;
// console.log(population);

// // template literals -
// // description - Togo is in Africa and its population of 562929296 people soeak French
// const description = `${country} is in ${continent} and its popupaltion of ${population} people speak ${language}`;
// console.log(description);
// Togo as a country speak Majorly French

//BOOLEAN true or false

// comparison operators - < > <= >= ==
// = assignment
// == loose equality , === strict

// console.log(6 < 3);
// console.log(5 >= 5.0); // true
// console.log(4 == "4"); // true
// console.log(4 === "4"); // false

// console.log(4.1 >= "4"); //
// console.log(34 >= 3.4);

// console.log(6.7 <= 5.6); // false
// console.log(45 == 4.5); // false
// console.log(5 === "5.0"); //false
// console.log(6 <= 6.0); // true
// console.log(6 <= "6.0"); //
// console.log(6 === "6"); //
// console.log(7 > "7"); //
// console.log(9.3 >= "9");
// console.log(2 === "2"); //

//  Logical Opearators and && or ||  not !
// console.log(10 == "10");
// console.log(10 === "10");
// console.log("a" > "A"); //
// console.log(5 > 6 && 2 == 2 && 4 > 6);
// console.log(6 > 7 || 2 === 2);

// console.log((2 > 6 || 5.6 == 67) && 67 > 8);

// console.log(5 != 5); //
// console.log(5 == 5); // true
// // typeof

// console.log(typeof description);
//  type conversion and type coercion

// string numbers

// 'hello' -
// /4.0
// strings to Numbers
// const str = "90";
// console.log(typeof str);
// const converted = Number(str);
// console.log(typeof converted);

// numbers to string

// const num = 9000000;
// console.log(typeof num);
// const converted2 = String(num);
// console.log(typeof converted2);

//type corecion

// const num1 = 8;
// const num2 = "2";
// const res = num1 / num2;

// console.log(num1 + num2); //15 87
// console.log(typeof res);

// boolenas true or false

// Null - null
// let age = null;
// console.log(age, age + 4, `my age is ${age}`);
// // Undefined - undefined
// let year;
// console.log(year);
// console.log(year, year + 4, `the year is ${year}`);
// //truthy -
// console.log(Boolean(""));
// // and falsy values 0, null, undefined

// //control flow
// // conditional statment
// // if(condition){code}
// const password = "219rtyuio@";
// if (password.length > 6) {
//   console.log("Your password is strong");
// }
// if (false) {
//   console.log("Working");
// }
// if else
//if(condition){
//CODE 1
//}else{
//code 2
// }
//

// if (password.length > 6 && password.includes("@")) {
//   console.log("Your password is strong");
// } else {
//   console.log("Your password is weak");
// }
// if (true && true && true) {
//   console.log("Here");
// }

const country = "Hungary";
const continent = "Europe";
const population = 12;
const isIsland = false;
const language = "English";

// sarah speaks english has less than 50 people and is not an island
// You should live in Portugal
// Portugal does not meet your criteria
if (language === "English" && population < 50 && !false) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

const age = 18;
// >= 18

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are not one");
}

//
//  if (condition)else if (another condition)else if(condition){}else{}

const password = "456u";
// recommended >7 an dinclude @, strong > 7 and weak

if (password.length >= 7 && password.includes("@")) {
  console.log("Your password is recommended");
} else if (password.length >= 7) {
  console.log("Your password is strong");
} else {
  console.log("Your password is weak");
}

// whether a number is postive, negative or zero
const num = 10;

if (num > 0) {
  console.log(`${num} is a POSITUVE Number`);
} else if (num < 0) {
  console.log(`${num} is a NEGATIVE Number`);
} else {
  console.log("This is Zero");
}
// even or odd

if (num % 2 === 0) {
  console.log("This is EVEN");
} else {
  console.log("This is ODD");
}

// if you are less than 18 - welcome to the baby section
// 18 and 50 - welcome to the club
// 50+ - welcome to the vip section

const myAge = 18;
if (myAge < 18) {
  console.log("Welcome to baby Section");
} else if (myAge > 50) {
  console.log("welcome to VIP SECTION");
} else {
  console.log("Welcome to the club");
}

// if (myAge < 18) {
//   console.log("Welcome to baby Section");
// } else if (myAge <= 50) {
//   console.log("welcome to the xlub");
// } else {
//   console.log("welcome to VIP SECTION");
// }

// if (myAge < 18) {
//   console.log("Welcome to baby Section");
// } else if (myAge >= 18 && myAge <= 50) {
//   console.log("welcome to the xlub");
// } else {
//   console.log("welcome to VIP SECTION");
// }

//SWITCH STATeMENT
const day = 67;
switch (day) {
  case 1:
    console.log("MONDAY");
    break;
  case 2:
    console.log("TUESDAY");
    break;
  case 3:
    console.log("WEDNESDAY");
    break;
  case 4:
    console.log("THURSDAY");
    break;
  case 5:
    console.log("FRIDAY");
    break;
  case 6:
    console.log("SATURDAY");
    break;
  case 7:
    console.log("SUNDAY");
    break;
  default:
    console.log("NOT A VALID DAY");
    break;
}

const grade = "a";
switch (grade) {
  case "A":
  case "a":
    console.log("EXCELLENT");
    break;
  case "B":
  case "b":
    console.log("VERY GOOD");
    break;
  case "C":
    console.log("GOOD");
    break;
  case "D":
    console.log("FAIR");
    break;
  case "E":
    console.log("POOR");
    break;
  case "F":
    console.log("FAIL");
    break;
  default:
    console.log("NOT A VALID GRADE");
    break;
}
