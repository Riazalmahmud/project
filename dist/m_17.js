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
{
    //
    function sqare(nam) {
        return nam * nam;
    }
    const sqareResult = sqare(4);
    console.log(sqareResult);
    //   class Users {
    //     constructor(public newUser: User) {}
    //     makeUser() {
    //       return {
    //         name: this.newUser.name,
    //         age: this.newUser.age,
    //         contact: this.newUser.contact,
    //       };
    //     }
    //     }
    function Users(newUser) {
        return {
            name: newUser.name,
            age: newUser.age,
            contact: newUser.contact,
        };
    }
    const userObj = {
        name: "RIAZ",
        age: 18,
        contact: "01571234567",
    };
    const ResultParse = Users(userObj);
    console.log(ResultParse);
    function getAllPost(url) {
        return fetch(url)
            .then((res) => res.json())
            .then((data) => ({ data, status: 200 }))
            .catch((err) => ({
            data: null,
            status: 404,
            error: err.message,
        }));
    }
    function myAllPost() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield getAllPost("https://jsonplaceholder.typicode.com/users");
            if (response.status === 200) {
                // console.log(response);
                response.data.forEach((post) => {
                    console.log(`"your is ", ${post.name} and your email ${post.email}`);
                });
                // response.data.map((post) =>
                //   console.log(
                //     "your is ",
                //     `<li>${post.name}</li> and email is ${post.email}`
                //   )
                // );
            }
            else {
                console.log("error", response.error);
            }
        });
    }
    myAllPost();
}
