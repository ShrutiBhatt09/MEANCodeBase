import { Reservation } from "../../reservation/reservation.model";

export interface Restaurant {
    id: string;
    name: string;
    category: string;
    deliveryEstimate: string;
    rating: number;
    imagePath: string;
    imagePathHref: string;
    about: string;
    hours: string;
    type: string;
    area: string;
    address: string;
    reservation: Reservation;
}
