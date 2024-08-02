"use strict";
{
    //
    class AirTicket {
        constructor(passengerName, ticketPrice, contcatName) {
            this.passengerName = passengerName;
            this.ticketPrice = ticketPrice;
            this.contcatName = contcatName;
            //   console.log(passengerName, ticketPrice, contcatName);
        }
    }
    const userArgs = ["Riaz", 5000, "01057131724"];
    const parseAirTicketFun = new AirTicket(...userArgs);
    //   console.log(parseAirTicketFun);
    class Product {
        constructor(id, productName, price) {
            this.id = id;
            this.productName = productName;
            this.price = price;
        }
    }
    function creatNewProduct(...args) {
        return new Product(...args);
    }
    const inputProduct = creatNewProduct("10101", "Apple 16 proMax", 15000);
    class ApiRequestCalss {
        constructor(api) {
            this.api = api;
        }
        send() {
            console.log(`yout api url ${this.api.apiUrl} and method ${this.api.method}`);
        }
    }
    let parsApiObj = {
        apiUrl: "https://www.youtube.com/",
        method: "GET",
        data: { name: "apple 15 pro max", price: 15 },
    };
    const apiResutl = new ApiRequestCalss(parsApiObj);
    console.log(apiResutl);
    //
}
