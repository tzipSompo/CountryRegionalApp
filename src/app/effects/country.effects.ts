import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, debounceTime, defer, interval, map, mapTo, mergeMap, Observable, of, switchMap, timer } from 'rxjs';
import { ActionTypes } from '../actions/countries.actions';
import { RegionsApiService } from '../services/regions-api.service';

@Injectable({
  providedIn: 'root'
})
export class CountryEffects {

  constructor(private actions$: Actions, private regionsApi: RegionsApiService) { }

  @Effect()
  loadCountries$ = this.actions$.pipe(
    ofType(ActionTypes.LoadRandomRegion),
    switchMap(() =>
      timer(0, 15000).pipe(
        switchMap(()=> this.regionsApi.getCountriesByRegion()
        .pipe(
          map(countries => ({ type: ActionTypes.SuccessLoadRandomRegion, payload: countries })),
          catchError(() => of({ type: ActionTypes.ErrorLoadRandomRegion }))
        )))      
      )
     
    )


}
