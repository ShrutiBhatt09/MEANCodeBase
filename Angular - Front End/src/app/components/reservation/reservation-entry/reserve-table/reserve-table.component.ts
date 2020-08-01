import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap, tap, debounceTime, distinctUntilChanged, catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Component({
    selector: 'lacc-reserve-table',
    templateUrl: './reserve-table.component.html',
    styleUrls: ['./reserve-table.component.css']
})

export class ReserveTableComponent implements OnInit {

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        
    }

}
