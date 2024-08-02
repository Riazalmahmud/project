"use strict";
function myAge(age) {
    return age;
}
const myAgeF = myAge('hello world');
function genericType(age) {
    return age;
}
const mygenericType = genericType;
console.log(mygenericType(100));
