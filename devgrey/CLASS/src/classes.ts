class Coder {
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Eaysin = new Coder("Eaysin", "Rock", 24);
console.log(Eaysin.getAge());
// console.log(Eaysin.age);

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

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
// console.log(Sara.age);

// !...........
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guiterest implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    (this.name = name), (this.instrument = instrument);
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guiterest("Mishu", "guiter");
console.log(Page.play("strums"));

// !...........
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
