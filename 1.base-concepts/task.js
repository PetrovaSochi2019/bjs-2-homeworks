"use strict";

function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;
  
  if (d < 0) {
    return [];
  } else if (d === 0) {
    return [-b / (2 * a)];
  } else {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1, x2];
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
}