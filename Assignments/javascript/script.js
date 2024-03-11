
let quote = "hello js";
let value = 5;

console.log(quote);

console.log("Doubled Value = " + (value*2));

function doubleNumber(input){return input*2;}

console.log(doubleNumber(value))

class Gabe{
    constructor(name, age, height, gender){
        this.name = "Gabriel"
        this.age = age;
        this.height = height;
        this.gender = gender;
    }

    get name(){return this.name};
}

const me = Gabe(19, 183, "m")

console.log(me.name())

