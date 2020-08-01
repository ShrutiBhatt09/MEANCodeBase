import { OrderItem } from "../order/order.model";

export class Orders{
    name: string;
    address: string;
    number: string;
    email: string;
    emailConfirmation: string;
    optionalAddress: string;
    paymentOptions: string;
    orderItems: OrderItem[];
    id: number;
}
