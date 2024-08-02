
function myAge<t>(age: t): t {

    return age
}


const myAgeF = myAge('hello world')


   
// function mySecoundAge<t>(age: t): t {
//     return  age
// }

// let mySecoundAgeF: <Input>(arg: Input) => Input = mySecoundAge
// console.log(mySecoundAgeF([100, 100, 1, 8, 5]))

// function myThirdAge<t>(age: t): t {
//     return age
// }
// let myThirdAgeF : { <t> (age: t): t } = myThirdAge
// console.log(myThirdAgeF([100, 100, 1, 8, 5]))


// interface genericFun {
//     <t> (age: t): t 
// }

// function myThirdAge<t>(age: t): t {
//     return age
// }
// let myThirdAgeF : genericFun = myThirdAge

// console.log(myThirdAgeF([100, 100, 1, 8, 5]))


interface generic {
    <T> (age: T): T
}
interface genericInput {
    <T> (age: T): T
}


// function genericType <T> (age: T): T {
// return age
// }

// const myGenericTypeF:generic = genericType

// console.log(myGenericTypeF('hello world'))


interface genericTypeInterface<T>{
    (age: T): T
}


function genericType <T> (age: T): T {
    return age
    }

    const mygenericType : genericTypeInterface<number> = genericType 
    console.log(mygenericType(100))


