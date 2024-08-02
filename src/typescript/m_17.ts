{
  //

  function sqare(nam: number) {
    return nam * nam;
  }

  type SqareType = ReturnType<typeof sqare>;
  const sqareResult = sqare(4);
  console.log(sqareResult);
  type User = {
    name: string;
    age: number;
    contact: string;
  };

  //   class Users {
  //     constructor(public newUser: User) {}
  //     makeUser() {
  //       return {
  //         name: this.newUser.name,
  //         age: this.newUser.age,
  //         contact: this.newUser.contact,
  //       };
  //     }
  //     }

  function Users(newUser: User) {
    return {
      name: newUser.name,
      age: newUser.age,
      contact: newUser.contact,
    };
  }
  type PareseUserType = ReturnType<typeof Users>;
  const userObj: PareseUserType = {
    name: "RIAZ",
    age: 18,
    contact: "01571234567",
  };
  const ResultParse = Users(userObj);
  console.log(ResultParse);

  // interface UserApi<T> {
  //   data: T;
  //   status: number;
  //   error?: string;
  // }
  // function userFetch<T>(url: string): Promise<UserApi<T>> {
  //   return fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => ({ data, status: 200 }))
  //     .catch((error) => ({
  //       data: null as unknown as T,
  //       status: 200,
  //       message: error.message,
  //     }));
  // }
  // type ParseTypeUser = ReturnType<typeof userFetch>;
  // async function userFunction() {
  //   const userRes: Awaited<ParseTypeUser<number[]>> = await userFetch<number[]>(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );
  //   if (userRes.status === 200) {
  //     console.log("this is user ", userRes.data);
  //   } else {
  //     console.log("error", userRes.error);
  //   }
  // }
  // userFunction();

  // interface UsersInterface<T> {
  //   data: T;
  //   status: number;
  //   error?: string;
  // }

  // function getAllUser<T>(url: string): Promise<UsersInterface<T>> {
  //   return fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => ({ data, status: 200 }))
  //     .catch((err) => ({
  //       data: null as unknown as T,
  //       status: 404,
  //       error: err.message,
  //     }));
  // }

  // type getUserType = ReturnType<typeof getAllUser>;
  // async function getUser() {
  //   const response: Awaited<getUserType<number[]>> = await getAllUser<number[]>(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );

  //   if (response.status === 200) {
  //     console.log("this user ", response.data);
  //   } else {
  //     console.log("error", response.error);
  //   }
  // }

  // getUser();
  //

  interface PostInterface<T> {
    data: T;
    status: number;
    error?: string;
  }

  function getAllPost<T>(url: string): Promise<PostInterface<T>> {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => ({ data, status: 200 }))
      .catch((err) => ({
        data: null as unknown as T,
        status: 404,
        error: err.message,
      }));
  }
  type GeneratePostType = ReturnType<typeof getAllPost>;

  async function myAllPost() {
    const response: Awaited<GeneratePostType<number[]>> = await getAllPost<
      number[]
    >("https://jsonplaceholder.typicode.com/users");
    if (response.status === 200) {
      // console.log(response);
      response.data.forEach((post) => {
        console.log(`"your is ", ${post.name} and your email ${post.email}`);
      });
      // response.data.map((post) =>
      //   console.log(
      //     "your is ",
      //     `<li>${post.name}</li> and email is ${post.email}`
      //   )
      // );
    } else {
      console.log("error", response.error);
    }
  }

  myAllPost();
}
