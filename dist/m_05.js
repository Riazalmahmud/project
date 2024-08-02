"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/users`);
        return response.json();
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield fetchData();
        users.forEach(user => {
            // console.log(user.name)
        });
    });
}
main();
// problem 01
// async function problem01():Promise<User []>{
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
//     return response.json()
// }
// type UserType01 = Awaited<ReturnType <typeof problem01>>
// async function inputMain(userId: number){
//     const users: UserType01 = await problem01()
//     const user = users.find(u => u.id=== userId)
//     if (user) {
//         console.log(`your name is ${user.name} and your email is ${user.email}`)
//     }else{
//         console.log('User not found')
//     }
// }
// inputMain(6)
function problem01() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/users`);
        return response.json();
    });
}
function fetchById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield problem01();
        return user.find(u => u.id == id);
    });
}
function inputMain(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fetchById(userId);
        if (user) {
            console.log(`your name is ${user.name} and your email is ${user.email}`);
        }
        else {
            console.log('User not found');
        }
    });
}
inputMain(6);
