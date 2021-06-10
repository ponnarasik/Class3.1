let language = "JavaScript";
console.log(language.replace('J', 'Q'));
console.log(language.slice(0,5));
console.log(language);

console.log(language.slice(1,6));

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);

console.log("\"The dog's favorite toy is a stuffed hedgehog,\" said Chris");

console.log('Launch\nCode');
console.log('Launch\tCode');


let phrase = 'Code for fun';
console.log(phrase[2]);

const classes = ["science, computer, art"];
const teachers = ["Jones", "Willoughby", "Rhodes"];
console.log(classes.length);
console.log(teachers.length);

let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);
let str = ("LaunchCode students rock!");

console.log(str.split(" "));


let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);