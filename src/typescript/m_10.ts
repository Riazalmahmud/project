type User = {
    id: number;
    name: string;
    email: string;
    password: string;
  };
  
  type UserProfile = Omit<User, 'password'>;
  
  const user: User = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'supersecret'
  };
  
  const userProfile: UserProfile = {
    id: user.id,
    name: user.name,
    email: user.email,
  };
  
  console.log(userProfile); 
  // Output: { id: 1, name: 'John Doe', email: 'john.doe@example.com' }
  