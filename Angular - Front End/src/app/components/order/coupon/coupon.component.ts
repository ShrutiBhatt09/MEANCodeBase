import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lacc-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  @Output() modalClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  

  onClose(){
      this.modalClose.emit();
  }


}
