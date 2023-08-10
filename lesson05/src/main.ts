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
  secondLang!: string; //assertion --> we know what we are doing, we are just not going to initialize this right away

  constructor(
    public readonly name: string,
    public music: string,
    private age: number, // can access only in this class
    protected lang: string = "TypeScript" // can access into this class, as well as derived classes
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello,I'm ${this.age} years old`;
  }
}

const Rahul = new Coder("Rahul", "Pop", 23);
console.log(Rahul.getAge());
// console.log(Rahul.age);
// console.log(Rahul.lang);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Trupti = new WebDev("mac", "Trupti", "lofi", 18);
console.log(Trupti.getLang());
// console.log(Trupti.lang);
// console.log(Trupti.age);

// Implementation of interface
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const page = new Guitarist("Jimmy", "guitar");
console.log(page.play("strums"));

// //////////////////////////////////

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

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
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  // to get our data
  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
      // setters cannot return values, empty returns are ok
    } else throw new Error("Params is not an array of strings");
  }
}

const myBands = new Bands();
myBands.data = ["one", "two", "three", "four"];
console.log(myBands.data);
myBands.data = [...myBands.data, "five", "six", "seven", "eight", "nine"];
console.log(myBands.data);
// myBands.data = ["", 11481];
