import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numberObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    //A new observable object creation using built in function interval which emits incremental number at specified interval(1sec)
    const myNumbers = Observable.interval(1000);

    //and observing the observable object (myNumbers) by subscribing to it and receiving emitted data.
    this.numberObsSubscription = myNumbers.subscribe((number: number) => {
      console.log(number);
    })

    const myObservabe = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);

      setTimeout(() => {
        observer.next('second package');
      }, 4000);

      setTimeout(() => {
        // observer.error("this doesn't work");
        observer.complete();
      }, 5000);

      //This won't work as observable completed at 5th second.
      setTimeout(() => {
        observer.next('third package');
      }, 6000);

    });

    this.customObsSubscription = myObservabe.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error) },
      () => { console.log('completed'); }
    );


  }

  ngOnDestroy(): void {
    this.numberObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
