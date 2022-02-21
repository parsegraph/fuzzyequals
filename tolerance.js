#!/usr/bin/env node

const fuzzyEquals = require(".").default;

let iters = 0;
let delta = 1;
const a = 1;

let isFuzzyEqual = false;
while(a !== a + delta) {
  iters++;
  const b = a + delta;
  if (!isFuzzyEqual && fuzzyEquals(a, b)) {
    console.log(`Iteration ${iters}. delta=${delta}`);
    console.log(`fuzzyEquals(${a}, ${b})=${fuzzyEquals(a, b)}`);
    isFuzzyEqual = true;
  }
  delta = delta / 2;
}
console.log(`Iteration ${iters}. delta=${delta}`);
console.log(`${a} === ${a + delta}: ${a === a + delta}`);
