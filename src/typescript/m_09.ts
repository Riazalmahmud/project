{
    //
    type Role = 'Admin'| 'user' | 'guest'
type UserPermission = Record<Role, Boolean>
const permission: UserPermission = {
    Admin: true,
    user: false,
    guest: false,
}
console.log(permission.Admin , 'hello world SFSFS' )
console.log(permission.user)
console.log(permission.guest)

type ProductId = 'p' | 'p2' | 'p3'

type ProductInfo = {
    name: string,
    price: number,
    inStock: boolean,

}


type Inventory = Record<ProductId, ProductInfo>

const inventory: Inventory = {
    p: { name: 'Laptop', price: 1200, inStock: true },
    p2: { name: 'Smartphone', price: 800, inStock: false },
    p3: { name: 'Tablet', price: 600, inStock: true }
  };
//   console.log(inventory.p.name);
//   console.log(inventory);


  type Language = 'en' | 'fr' | 'es';

  type TranslationKeys = 'welcome' | 'goodbye';

  type Translations = Record<Language, Record<TranslationKeys, string>>

  const translations:Translations ={
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
  }

  console.log(translations.en)


  type Endpoint = 'getUser' | 'getPosts' | 'getComments';

type ApiResponse = Record<Endpoint, any>

const response: ApiResponse= {
    getUser: { id: 1, name: 'John Doe' },
    getPosts: [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }],
    getComments: [{ id: 1, text: 'Comment 1' }, { id: 2, text: 'Comment 2' }]
  };

  console.log(response.getUser)

    //
}