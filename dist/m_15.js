"use strict";
class Users {
    constructor(name, age, email) {
    }
}
const userArgs = ['Riaz al mahmud', 17, 'riaz@gmail.com'];
const normalUser = new Users(...userArgs);
console.log(normalUser);
