import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap, tap, debounceTime, distinctUntilChanged, catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { MenuItem } from '../../../restaurants/restaurant-detail/menu-item/menu-item.model';
import { RestaurantsService } from '../../../restaurants/restaurants-json.service';


@Component({
    selector: 'lacc-reservation-menu',
    templateUrl: './reservation-menu.component.html',
    styleUrls: ['./reservation-menu.component.css']
})

export class ReservationMenuComponent implements OnInit {

    menu:MenuItem[];
    id:string;

    constructor(private route: ActivatedRoute, private restaurantService: RestaurantsService) {
    }

    ngOnInit() {
        this.id = this.route.parent.snapshot.params['id'];
        this.menu = this.restaurantService.getMenuOfRestaurant('');
    }

}
