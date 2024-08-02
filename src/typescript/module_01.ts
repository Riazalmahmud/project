interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }

  interface AddressWithUnit {
    name?: string;
    unit: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }

  interface extendsKeyWord extends BasicAddress, AddressWithUnit {
 
  }

  const cc: extendsKeyWord = {
    name: 'John Doe',
    unit: 'Apt 201',
    street: '123 Main St',
    city: 'Anytown',
    country: 'USA',
    postalCode: '12345'
  }
  console.log(cc)


