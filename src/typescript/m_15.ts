

class Users{
    constructor(name: string , age: number, email: string) {

    }
}

type UserConstructorFunction = ConstructorParameters<typeof Users>;


const userArgs: UserConstructorFunction = ['Riaz al mahmud', 17, 'riaz@gmail.com']
const normalUser = new Users(...userArgs)
console.log(normalUser)