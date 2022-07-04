import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { interval, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActionTypes, LoadRandomRegion } from './actions/countries.actions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private store: Store<{ countries: any }>) { }


  ngOnInit(): void {
    this.store.dispatch(new LoadRandomRegion());
  }
 


  ngOnDestroy(): void {
  }


}
