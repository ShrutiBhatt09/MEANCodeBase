import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Card } from './card.model';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

@Component({
  selector: 'lacc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  
  isFlipped:boolean =false;
  cardForm:FormGroup;
  cardList:Card[] =[];
  savedCard:string;

  public cardMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];
  public expirationDateMask = [/\d/, /\d/, '/', /\d/, /\d/];
  public cvvMask = [/\d/, /\d/, /\d/];

  autoCorrectedDatePipe = createAutoCorrectedDatePipe('mm/yy');

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.cardForm = this.formBuilder.group({
      name:new FormControl('',[Validators.required]),
      cardNumber: new FormControl('',[Validators.required, Validators.minLength(19)]),
      expirationDate: new FormControl('',[Validators.required, Validators.minLength(5)]),
      CVV:new FormControl('',[Validators.required, Validators.minLength(3)])
    });
    this.savedCard="addNew";
    // this.cardList=[
    //   {
    //     name:"AAAAAAAAA",
    //     cardNumber:"XXXXXXXXXXXXXXX",
    //     expirationDate:"gdfgdf",
    //     CVV:9888
    //   },
    //   {
    //     name:"AAAAAAAAA",
    //     cardNumber:"123XXXXXXXXXXXXXXX",
    //     expirationDate:"gdfgdf",
    //     CVV:9888
    //   }
    // ]
  }

  flipCard(){
    this.isFlipped = !this.isFlipped;
  }

  setCVV(card:string){
    this.savedCard = card;
  }

  saveCard(newCard:Card){
    this.cardList.push(newCard);
    this.cardForm.reset();
  }

  getFormValues(value:string){
    return this.cardForm.get(value);
  }

}
