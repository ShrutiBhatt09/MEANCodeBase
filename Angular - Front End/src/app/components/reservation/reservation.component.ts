import { Component, OnInit } from '@angular/core';
import { Restaurant } from './../restaurants/restaurant/restaurant.model';
import { RestaurantsService } from './../restaurants/restaurants-json.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'lacc-reservation',
    templateUrl: './reservation.component.html',
    styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

    restaurants: Restaurant[] = [];
    filters: any = {};
    selectedFilters: {} = {
        category: '',
        location: '',
        cuisine: '',
        sort:''
    };

    constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        this.restaurants = this.restaurantService.getAllRestaurants();
        this.filters = this.getFilterData();
    }

    getBGcolorForRating(rating: number): string {
        return rating < 2.5 ? 'bg-red' : (rating < 3.5 ? 'bg-orange' : 'bg-green');
    }

    getStarForRating(rating: number, position: number): string {
        let className: string = '';
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

    clearFilter() {
        let activeElements: any = document.getElementsByClassName('filter-option');
        for (let i: number = 0; i < activeElements.length; i++) {
            activeElements[i].classList.remove('active');
        }
        Object.keys(this.selectedFilters).forEach(k => {
            this.selectedFilters[k] = '';
        });
        this.restaurants = this.restaurantService.getAllRestaurants();
    }

    selectFilter(id: string, $event) {
        let currentElement: any = $event.target || $event.srcElement;
        if (document.getElementById(id).getElementsByClassName('active')[0] !== undefined) {
            document.getElementById(id).getElementsByClassName('active')[0].classList.remove('active');
        }
        currentElement.classList.add('active');
        this.filterRestaurants(id, currentElement.innerText);
    }

    navigateToReservationPage(redirectTo: string, id: string) {
        this.router.navigate(['reservation/reservation-entry', id, redirectTo]);
    }

    getFilterData(): {} {
        this.filters = {
            'category': this.getFiterObject('category'),
            'location': this.getFiterObject('area'),
            'cuisine': this.getFiterObject('type')
        };

        return this.filters;
    }

    getFiterObject(type: string): any[] {
        return this.restaurants.map(item => item[type])
            .filter((value, index, self) => self.indexOf(value) === index);
    }

    getFilterCount(name:string, value:string):number{
        return this.restaurants.filter(x => x[name] === value).length;
    }

    filterRestaurants(type, name) {
        this.selectedFilters[type] = name;
        this.restaurants = this.restaurantService.getAllRestaurants();
        if (this.selectedFilters['category'] !== '') {
            this.restaurants=this.restaurants.filter(x=>x.category === this.selectedFilters['category']);
        }
        if (this.selectedFilters['location'] !== '') {
            this.restaurants=this.restaurants.filter(x=>x.area === this.selectedFilters['location']);
        }
        if (this.selectedFilters['cuisine'] !== '') {
            this.restaurants=this.restaurants.filter(x=>x.type === this.selectedFilters['cuisine']);
        }
        if (this.selectedFilters['sort'] !== '') {
            this.restaurants = this.restaurants.sort((a,b)=>a[this.selectedFilters['sort'].toLowerCase()]-b[this.selectedFilters['sort'].toLowerCase()]);
        }
    }

}
