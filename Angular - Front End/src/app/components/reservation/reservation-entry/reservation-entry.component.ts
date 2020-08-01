import {Component, OnInit} from '@angular/core';
import {Restaurant} from './../../restaurants/restaurant/restaurant.model';
import {RestaurantsService} from './../../restaurants/restaurants-json.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MenuItem} from './../../restaurants/restaurant-detail/menu-item/menu-item.model';

@Component({
    selector: 'lacc-reservation-entry',
    templateUrl: './reservation-entry.component.html',
    styleUrls:['./reservation-entry.component.css']
})
export class ReservationEntryComponent implements OnInit {

    restaurant: Restaurant;
    id:string;
    menu: MenuItem[];

    constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => this.id = params.id);
        this.restaurant = this.restaurantService.getAllRestaurants().find(x=>x.id===this.id);
    }

    getBGcolorForRating(rating:number):string{
        return rating < 2.5 ? 'bg-red': (rating < 3.5 ? 'bg-orange' : 'bg-green');
    }

    getStarForRating(rating:number, position:number):string{
        let className:string = '';
        switch (position) {
            case 1:
                    className = rating >= 1 ? 'fa-star' : (rating < 1 && rating > 0 ? 'fa-star-half-o' : 'fa-star-o');
                break;
            case 2:
                    className = rating >= 2 ? 'fa-star' : (rating < 2 && rating > 1 ? 'fa-star-half-o' : 'fa-star-o');
                break;
            case 3:
                className = rating >= 3 ? 'fa-star' : (rating < 3 && rating > 2 ? 'fa-star-half-o' : 'fa-star-o');
                    break;
            case 4:
                className = rating >= 4 ? 'fa-star' : (rating < 4 && rating > 3 ? 'fa-star-half-o' : 'fa-star-o');
                break;
            case 5:
                className = rating == 5 ? 'fa-star' : (rating < 5 && rating > 4 ? 'fa-star-half-o' : 'fa-star-o');
                break;
            default:
                className = 'fa-star-o';
                break;
        }
        return className;
    }

    navigateToOrder(id:string){
        this.router.navigate(['restaurants/'+id+'/menu']);
    }

}
