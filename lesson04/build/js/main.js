"use strict";
// type aliases functions literal and never
// interface
// interface PostId = stringOrNumber
// literal types
let myName;
let user;
// interface mathFunction {
//   (a: number, b: number): number;
// }
const add = (a, b) => {
  return a + b;
};
const logMsg = (message) => {
  console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
logMsg(add(45, 63));
let subtract = (c, d) => {
  return c - d;
};
logMsg(subtract(45, 63));
let multiply = (a, b) => {
  return a * b;
};
logMsg(multiply(45, 63));
// optional parameter
const addAll = (a, b, c) => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
const sumAll = (a, b, c = 2) => {
  return a + b + c;
};
logMsg(addAll(45, 63));
logMsg(addAll(45, 63, 45));
logMsg(sumAll(45, 63));
logMsg(sumAll(45, 63, 45));
