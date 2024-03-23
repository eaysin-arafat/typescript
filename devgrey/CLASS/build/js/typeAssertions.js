"use strict";
console.log("hello world!");
// convert ot more or less specific
let a = "hello";
let b = a;
let c = a;
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
//Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
10;
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
let year = document.getElementById("year");
let thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
