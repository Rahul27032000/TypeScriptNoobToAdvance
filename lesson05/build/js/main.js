"use strict";
// // typescript classes, implementing interfaces
// ```
// // by default all the properties and methods are public
// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: string;
//   constructor(name: string, music: string, age: number, lang: string) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }
// }
// ```;
// class with modifiers
class Coder {
    constructor(name, music, age, // can access only in this class
    lang = "TypeScript" // can access into this class, as well as derived classes
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello,I'm ${this.age} years old`;
    }
}
const Rahul = new Coder("Rahul", "Pop", 23);
console.log(Rahul.getAge());
// console.log(Rahul.age);
// console.log(Rahul.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Trupti = new WebDev("mac", "Trupti", "lofi", 18);
console.log(Trupti.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const page = new Guitarist("Jimmy", "guitar");
console.log(page.play("strums"));
// //////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);
console.log(Peeps.count);
// //////////////////////////////////////////////////////////////////
// getters and setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    // to get our data
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
            // setters cannot return values, empty returns are ok
        }
        else
            throw new Error("Params is not an array of strings");
    }
}
const myBands = new Bands();
myBands.data = ["one", "two", "three", "four"];
console.log(myBands.data);
myBands.data = [...myBands.data, "five", "six", "seven", "eight", "nine"];
console.log(myBands.data);
// myBands.data = ["", 11481];
