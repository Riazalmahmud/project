interface Users {
    name: string;
    address: string;
}

let user: Readonly<Users> ={
    name: 'Riaz',
    address: 'Dhaka'
}

// user.address = 'noakhali'

console.log(user)
