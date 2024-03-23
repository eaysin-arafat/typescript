"use strict";
class Coder {
    constructor(name, music, age, lang = "Typescript") {
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
        return `Hello, I'm ${this.age}`;
    }
}
const Eaysin = new Coder("Eaysin", "Rock", 24);
console.log(Eaysin.getAge());
// console.log(Eaysin.age);
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
const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
class Guiterest {
    constructor(name, instrument) {
        (this.name = name), (this.instrument = instrument);
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guiterest("Mishu", "guiter");
console.log(Page.play("strums"));
// !...........
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
const Masud = new Peeps("Masud");
const Akash = new Peeps("Akash");
const Saidy = new Peeps("Saidy");
console.log(Masud.id);
console.log(Peeps.count);
// !...........
// class Bands {
//   private dataState: string[];
//   constructor() {
//     this.dataState = [];
//   }
//   public get data(): string[] {
//     return this.dataState;
//   }
//   public set data(value: string[]) {
//     if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
//       this.dataState = value;
//       return;
//     } else throw new Error("Param is not an array of strings");
//   }
// }
// const MyBands = new Bands();
// MyBands.data = ["Kabir Sumon", "Arnob"];
// console.log(MyBands.data);
// MyBands.data = [...MyBands.data, "Kafil Hasan"];
// console.log(MyBands.data);
