console.log("hello world!");

type One = string;
type Two = string | number;
type Three = "hello";

// convert ot more or less specific
let a: One = "hello";
let b = a as Two;
let c = a as Three;

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;

  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

//Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

10 as unknown as string;

//The DOM
// const img = document.querySelector("img")!;
// const myImg = document.getElementById("#img") as HTMLImageElement;

// img.src;
// myImg.src;

// const year = document.getElementById("year") as HTMLElement;
// const thisYear = new Date().getFullYear().toString();

// year.setAttribute("datetime", thisYear);

// year.textContent = thisYear;

//tutorial variation
// let year: HTMLElement | null;
// year = document.getElementById("year");
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();

// if (year) {
//   year.setAttribute("datetime", thisYear);
//   year.textContent = thisYear;
// }

//2n variation:
let year = document.getElementById("year") as HTMLSpanElement;
let thisYear: string = new Date().getFullYear().toString();

year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
