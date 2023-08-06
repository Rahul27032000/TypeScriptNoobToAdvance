// type aliases functions literal and never

// type aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  album: stringOrNumberArray;
};

type UserId = stringOrNumber;

// interface
// interface PostId = stringOrNumber

// literal types
let myName: "post";

let user: "Admin" | "SuperUser" | "consumer" | "DeliveryPartner";

// functions

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

const add: mathFunction = (a, b) => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello!");
logMsg(add(2, 3));
logMsg(add(45, 63));

let subtract: mathFunction = (c, d) => {
  return c - d;
};

logMsg(subtract(45, 63));

let multiply: mathFunction = (a, b) => {
  return a * b;
};

logMsg(multiply(45, 63));

// optional parameter
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// default parameter
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(45, 63));
logMsg(addAll(45, 63, 45));
logMsg(sumAll(45, 63));
logMsg(sumAll(45, 63, 45));

// rest parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

// never
const createError = (errorMsg: string): never => {
  throw new Error(errorMsg);
};

// const infinit = () => {
//   let i: number = 1;
//   while (true) {
//     i++;
//   }
// };

const infinit = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

const numberOrString = (value: string | number): string => {
  if (typeof value === "number") return "number";
  if (typeof value === "string") return "string";
  return createError("this should never happen");
};

numberOrString("dsf");

// custom type guard

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};
