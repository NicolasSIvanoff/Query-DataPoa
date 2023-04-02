import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ItineraryActions from '../actions/itinerary-query.actions';
import { QueryRouterBusService } from 'src/app/data-poa/services/query-router-bus.service';
import { ModifyObject } from 'src/app/data-poa/components/shared/objectForArray';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';

@Injectable()
export class ItineraryEffects {

  modifyObject = new ModifyObject(this.store);
  constructor(private actions$: Actions, private serv: QueryRouterBusService, public store: Store<AppState>) { }

  loadItinerarys$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItineraryActions.loadItinerarys),
      mergeMap((props) =>
        this.serv.getApiItinerary(props.IdItinerary).pipe(
          map((resultId) => {
            resultId = this.modifyObject.objectForArray(resultId);
            return ItineraryActions.loadItinerarysSuccess({
              itinerary: resultId,
            });
          }),
          catchError((error) =>
            of(ItineraryActions.loadItinerarysFailure({ error }))
          )
        )
      )
    )
  );

}
