"use strict";
const user = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'supersecret'
};
const userProfile = {
    id: user.id,
    name: user.name,
    email: user.email,
};
console.log(userProfile);
// Output: { id: 1, name: 'John Doe', email: 'john.doe@example.com' }
