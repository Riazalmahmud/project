"use strict";
function updateUser(user, fieldsToUpdate) {
    return Object.assign(Object.assign({}, user), fieldsToUpdate);
}
let upDateUserInfo = {
    name: 'riaz',
    email: 'riaz@gmail.com',
    mobile: '01571231424',
    age: 14,
    userAddress: 'Dhaka',
};
const updateUser02 = updateUser(upDateUserInfo, {
    age: 25,
});
console.log(updateUser02);
