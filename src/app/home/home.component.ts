import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //A new observable object creation using built in function interval which emits incremental number at specified interval(1sec)
    const myNumbers = Observable.interval(1000);

    //and observing the observable object (myNumbers) by subscribing to it and receiving emitted data.
    myNumbers.subscribe((number: number) => {
      console.log(number);
    })


  }

}
