"use strict";
{
    const permission = {
        Admin: true,
        user: false,
        guest: false,
    };
    console.log(permission.Admin, 'hello world SFSFS');
    console.log(permission.user);
    console.log(permission.guest);
    const inventory = {
        p: { name: 'Laptop', price: 1200, inStock: true },
        p2: { name: 'Smartphone', price: 800, inStock: false },
        p3: { name: 'Tablet', price: 600, inStock: true }
    };
    const translations = {
        en: {
            welcome: 'Welcome',
            goodbye: 'Goodbye',
        },
        fr: {
            welcome: 'Bienvenue',
            goodbye: 'Au revoir',
        },
        es: {
            welcome: 'Bienvenido',
            goodbye: 'Adiós',
        },
    };
    console.log(translations.en);
    const response = {
        getUser: { id: 1, name: 'John Doe' },
        getPosts: [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }],
        getComments: [{ id: 1, text: 'Comment 1' }, { id: 2, text: 'Comment 2' }]
    };
    console.log(response.getUser);
    //
}
