"use strict";

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((item, index) => item === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  if (users.length === 0) {
    return 0;
  }
  
  const ages = users
    .filter(user => user.gender === gender)
    .map(user => user.age);
    
  if (ages.length === 0) {
    return 0;
  }
  
  const average = ages.reduce((sum, age) => sum + age, 0) / ages.length;
  
  return average;
}