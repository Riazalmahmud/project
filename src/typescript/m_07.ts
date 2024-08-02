interface MyInfo {
    name: string,
    email?: string,
    mobile?: string,
    age?: number,
    userAddress?: string
} 



const obj: MyInfo = {
    name: 'Riaz',
    email: 'riaz@gmail.com'
}

// const obj2: Required<MyInfo> = {
//     name: 'Riaz',
//     email: 'riaz@gmail.com'
// }