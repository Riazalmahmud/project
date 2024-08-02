

// function add(a: number, b: number): number {
//     return a+ b
// }

// type AddParameters = Parameters<typeof add>
// const args: AddParameters = [5, 7]
// const result = add(...args)
// console.log(result)


function add(a: number, b: number): number{
    return a+b
}

type AddParameters = Parameters<typeof add>
const arrs: AddParameters = [50, 20]
const result = add(...arrs)
console.log(result)


type Users = {
    name: string,
    age: number,
    email: string,
}


// function createUsers(name: string, age: number, email: string): Users {
// return {name , age, email}
// }


// type CreateUsersParameters = Parameters<typeof createUsers>;


// function logerUsersCreation(...args: CreateUsersParameters) {
//     const newUser = createUsers(...args)
//     console.log(newUser)

// }


// logerUsersCreation('riaz al mahmud', 25, 'riaz@gmail.com')


function createUser(name: string, age: number, email: string): Users {
return {name, age, email}
}

type CreaterUserParameters = Parameters<typeof createUser>


function loginUser(...args: CreaterUserParameters) {
    const newUser = createUser(...args)
    console.log(newUser)
}

loginUser('riaz al mahmud', '28', 'riaz@gmail.com')