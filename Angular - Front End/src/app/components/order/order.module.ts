import {NgModule} from '@angular/core';
import {OrderComponent} from './order.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {OrderItemsComponent} from './order-items/order-items.component';
import {DeliveryCostsComponent} from '../delivery-costs/delivery-costs.component';
import {LeaveOrderGuard} from './leave-order.guard';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { CouponComponent } from './coupon/coupon.component';
import { TextMaskModule } from 'angular2-text-mask';

const ROUTES: Routes = [
    {path: '', component: OrderComponent, canDeactivate: [LeaveOrderGuard]}
];

@NgModule({
    declarations: [
        OrderComponent, 
        OrderItemsComponent, 
        DeliveryCostsComponent, 
        CardComponent, 
        CouponComponent,
    ],
    imports: [SharedModule,CommonModule,TextMaskModule, RouterModule.forChild(ROUTES)]
})

export class OrderModule {
}
