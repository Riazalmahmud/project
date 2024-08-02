{
  //

  class AirTicket {
    constructor(
      private passengerName: string,
      public ticketPrice: number,
      public contcatName: string
    ) {
      //   console.log(passengerName, ticketPrice, contcatName);
    }
  }

  type ParseAirTicket = ConstructorParameters<typeof AirTicket>;

  const userArgs: ParseAirTicket = ["Riaz", 5000, "01057131724"];
  const parseAirTicketFun = new AirTicket(...userArgs);
  //   console.log(parseAirTicketFun);

  class Product {
    constructor(
      private id: string,
      private productName: string,
      public price: number
    ) {}
  }

  type ParseProductType = ConstructorParameters<typeof Product>;

  function creatNewProduct(...args: ParseProductType): Product {
    return new Product(...args);
  }
  const inputProduct = creatNewProduct("10101", "Apple 16 proMax", 15000);
  //   console.log(inputProduct);

  interface ApiInterface {
    apiUrl: string;
    method: "POST" | "PUT" | "DELETE" | "GET";
    data: any;
  }

  class ApiRequestCalss {
    constructor(public api: ApiInterface) {}
    send() {
      console.log(
        `yout api url ${this.api.apiUrl} and method ${this.api.method}`
      );
    }
  }
  type ParserApiType = ConstructorParameters<typeof ApiRequestCalss>;
  let parsApiObj: ParserApiType[0] = {
    apiUrl: "https://www.youtube.com/",
    method: "GET",
    data: { name: "apple 15 pro max", price: 15 },
  };
  const apiResutl = new ApiRequestCalss(parsApiObj);
  console.log(apiResutl);
  //
}
