import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as QueryMiniBusActions from '../actions/minibus-query.actions';
import { QueryRouterBusService } from 'src/app/data-poa/services/query-router-bus.service';

@Injectable()
export class MiniBusQueryEffects {
  constructor(private actions$: Actions, private serv: QueryRouterBusService) { }

  loadQueryMiniBuss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QueryMiniBusActions.loadQueryMiniBuss),
      mergeMap(() =>
        this.serv.getApiMiniBus().pipe(
          map((routeMiniBus) =>
            QueryMiniBusActions.loadQueryMiniBussSuccess({ routeMiniBus })
          ),
          catchError((error) =>
            of(QueryMiniBusActions.loadQueryMiniBussFailure({ error }))
          )
        )
      )
    );
  });

}
