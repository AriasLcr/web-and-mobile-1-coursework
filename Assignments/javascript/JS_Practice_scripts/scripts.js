// Create a String and an int variable below
let quote = "hello js";
let value = 5;
// console.log the String value
console.log(quote);

// console.log the int * 2

console.log("Doubled Value = " + (value*2));

// Create a function that will double the inputted number
function doubleNumber(input){return input*2;}


// console.log the function with a chosen value as a parameter

console.log(doubleNumber(value))

// build an object of yourself with 3 properties
class Gabe{
    constructor(name, age, height, gender){
        this._name = name
        this.age = age;
        this.height = height;
        this.gender = gender;
    }

    get name(){return this._name};
}

const me = new Gabe("Gabriel",19, 183, "m")


// console.log your name

console.log(me.name)


/* create variables for an unordered list of HTML elements
(one ul, and three li) */

var ul = document.createElement('ul');
var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');


//insert the object properties through innerText into the li elements
li1.innerHTML = "item1";
li2.innerHTML = "item2";
li3.innerHTML = "item3";

//append the list items to the ul
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
// display these within the <div class="collector">
var collectorDiv = document.createElement('div');
collectorDiv.className = 'collector';

collectorDiv.appendChild(ul);
document.body.appendChild(collectorDiv);