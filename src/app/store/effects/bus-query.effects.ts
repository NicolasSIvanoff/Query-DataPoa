import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as BusActions from '../actions/bus-query.actions';

import { QueryRouterBusService } from 'src/app/data-poa/services/query-router-bus.service';

@Injectable()
export class BusQueryEffects {
  constructor(private actions$: Actions, private serv: QueryRouterBusService) { }

  loadPageBuss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BusActions.loadQueryBuss),
      mergeMap(() =>
        this.serv.getApiBus().pipe(
          map((routeBus) => BusActions.loadQueryBussSuccess({ routeBus })),
          catchError((error) =>
            of(BusActions.loadQueryBussFailure({ error }))
          )
        )
      )
    );
  });

}
