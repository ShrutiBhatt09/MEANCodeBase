import { Injectable } from '@angular/core';
import { Orders } from './orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  Orders =  [
    {
      name: "Casa da pepa",
      address: "pepa house",
      imagePath: "assets/images/page3_img1.jpg",
      number: "12",
      email: "pepa@gmail.com",
      emailConfirmation: "pepa@gmail.com",
      optionalAddress: "B",
      paymentOptions: "MON",
      orderItems: [
        {
          quantity: 1,
          menuId: "ceviche"
        }
      ],
      id: 1
    },
    {
      name: "Luis Alberto CC",
      address: "Av 12",
      imagePath: "assets/images/page3_img2.jpg",
      number: "12",
      email: "lacc@gmail.com",
      emailConfirmation: "lacc@gmail.com",
      optionalAddress: "B",
      paymentOptions: "CD",
      orderItems: [
        {
          quantity: 1,
          menuId: "ceviche"
        },
        {
          quantity: 1,
          menuId: "arroz-com-pollo"
        }
      ],
      id: 2
    },
    {
      name: "Meg",
      address: "Casa da meg",
      imagePath: "assets/images/page3_img3.jpg",
      number: "2",
      email: "meg@gmail.com",
      emailConfirmation: "meg@gmail.com",
      optionalAddress: "A",
      paymentOptions: "CD",
      orderItems: [
        {
          quantity: 1,
          menuId: "ceviche"
        },
        {
          quantity: 1,
          menuId: "arroz-com-pollo"
        }
      ],
      id: 3
    },
    {
      name: "Perico",
      address: "asdasdasd",
      imagePath: "assets/images/page3_img4.jpg",
      number: "22",
      email: "perico@gmail.com",
      emailConfirmation: "perico@gmail.com",
      optionalAddress: "22",
      paymentOptions: "CD",
      orderItems: [
        {
          quantity: 1,
          menuId: "ceviche"
        }
      ],
      id: 4
    },
    {
      name: "VASANTHA AARON",
      address: "720 ESKENAZI AVE",
      imagePath: "assets/images/page3_img1.jpg",
      number: "324234324",
      email: "anil.kumar@pratian.com",
      emailConfirmation: "anil.kumar@pratian.com",
      optionalAddress: "434",
      paymentOptions: "MON",
      orderItems: [
        {
          quantity: 1,
          menuId: "ceviche"
        },
        {
          quantity: 2,
          menuId: "arroz-com-pollo"
        }
      ],
      id: 5
    },
    {
      name: "VASANTHA AARON",
      address: "720 ESKENAZI AVE",
      imagePath: "assets/images/page3_img2.jpg",
      number: "3123",
      email: "anil.kumar@pratian.com",
      emailConfirmation: "anil.kumar@pratian.com",
      optionalAddress: "xcx",
      paymentOptions: "CC",
      orderItems: [
        {
          quantity: 1,
          menuId: "causa-rellena"
        }
      ],
      id: 6
    },
    {
      name: "VASANTHA AARON",
      address: "720 ESKENAZI AVE",
      imagePath: "assets/images/page3_img3.jpg",
      number: "123456789",
      email: "anil.kumar@pratian.com",
      emailConfirmation: "anil.kumar@pratian.com",
      optionalAddress: "234567",
      paymentOptions: "MON",
      orderItems: [
        {
          quantity: 3,
          menuId: "tallarin_saltado"
        }
      ],
      id: 7
    },
    {
      name: "VASANTHA AARON",
      address: "720 ESKENAZI AVE",
      imagePath: "assets/images/page3_img4.jpg",
      number: "2454",
      email: "anil.kumar@pratian.com",
      emailConfirmation: "anil.kumar@pratian.com",
      optionalAddress: "346",
      paymentOptions: "MON",
      orderItems: [
        {
          quantity: 1,
          menuId: "arroz-com-pollo"
        }
      ],
      id: 8
    },
    {
      name: "VASANTHA AARON",
      address: "720 ESKENAZI AVE",
      imagePath: "assets/images/page3_img5.jpg",
      number: "123",
      email: "anil.kumar@pratian.com",
      emailConfirmation: "anil.kumar@pratian.com",
      optionalAddress: "112",
      paymentOptions: "MON",
      orderItems: [
        {
          quantity: 1,
          menuId: "ceviche"
        },
        {
          quantity: 1,
          menuId: "arroz-com-pollo"
        }
      ],
      id: 9
    },
    {
      name: "VASANTHA AARON",
      address: "720 ESKENAZI AVE",
      imagePath: "assets/images/page3_img2.jpg",
      number: "1122",
      email: "anil.kumar@pratian.com",
      emailConfirmation: "anil.kumar@pratian.com",
      optionalAddress: "12",
      paymentOptions: "CC",
      orderItems: [
        {
          quantity: 2,
          menuId: "tallarin_saltado"
        }
      ],
      id: 10
    },
    {
      name: "ANIL KUMAR",
      address: "720 ESKENAZI AVE, A",
      imagePath: "assets/images/page3_img4.jpg",
      number: "24332",
      email: "anil.kumar@pratian.com",
      emailConfirmation: "anil.kumar@pratian.com",
      optionalAddress: "346356",
      paymentOptions: "MON",
      orderItems: [
        {
          quantity: 1,
          menuId: "arroz-com-pollo"
        },
        {
          quantity: 1,
          menuId: "causa-rellena"
        }
      ],
      id: 11
    },
    {
      name: "ANIL KUMAR",
      address: "720 ESKENAZI AVE, A",
      imagePath: "assets/images/page3_img5.jpg",
      number: "12312",
      email: "anil.kumar@pratian.com",
      emailConfirmation: "anil.kumar@pratian.com",
      optionalAddress: "321",
      paymentOptions: "MON",
      orderItems: [
        {
          quantity: 1,
          menuId: "arroz-com-pollo"
        },
        {
          quantity: 1,
          menuId: "causa-rellena"
        }
      ],
      id: 12
    },
    {
      name: "ANIL KUMAR",
      address: "720 ESKENAZI AVE, A",
      imagePath: "assets/images/page3_img4.jpg",
      number: "2435",
      email: "anil.kumar@pratian.com",
      emailConfirmation: "anil.kumar@pratian.com",
      optionalAddress: "35235",
      paymentOptions: "MON",
      orderItems: [
        {
          quantity: 1,
          menuId: "ceviche"
        }
      ],
      id: 13
    }
  ];

}
