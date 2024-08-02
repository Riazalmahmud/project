interface UserInfo {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}



async function fetchData(): Promise<UserInfo[]>{
const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
return response.json()
}

type UserType = Awaited<ReturnType <typeof fetchData>>

async function main(){
    const users: UserType = await fetchData()
    users.forEach(user =>{
        // console.log(user.name)
    })
}

main()

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



async function problem01():Promise<UserInfo []>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    return response.json()
}


async function fetchById(id:number): Promise<UserInfo | undefined>{
const user:UserInfo[] = await problem01()
return user.find(u=> u.id == id)
}
async function inputMain(userId: number){
 
    const user = await fetchById(userId)
    if (user) {
        console.log(`your name is ${user.name} and your email is ${user.email}`)
    }else{
        console.log('User not found')
    }

}

inputMain(6)