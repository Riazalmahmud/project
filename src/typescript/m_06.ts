interface UserInfoData{
    name: string,
    email: string,
    mobile: string,
    age: number,
    userAddress: string
} 


function updateUser(user: UserInfoData, fieldsToUpdate: Partial<UserInfoData>) {
    return {...user, ...fieldsToUpdate}
}

let upDateUserInfo: UserInfoData = {
    name: 'riaz',
    email: 'riaz@gmail.com',
    mobile: '01571231424',
    age: 14,
    userAddress: 'Dhaka',
   
}



const updateUser02 = updateUser(upDateUserInfo, {
    age: 25,

})


console.log(updateUser02)
