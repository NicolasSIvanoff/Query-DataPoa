import { createReducer, on } from '@ngrx/store';
import * as queryMiniBusActions from '../actions/minibus-query.actions';
import { BusModel } from 'src/app/data-poa/model/bus-model';

export const queryMiniBusFeatureKey = 'miniBusQuery';

export interface StateMiniBus {
  routeMiniBus: BusModel[];
  error: string;
}

export const initialState: StateMiniBus = {
  routeMiniBus: [],
  error: '',
};

export const reducerRouteMiniBus = createReducer(
  initialState,
  on(
    queryMiniBusActions.loadQueryMiniBussSuccess,
    (state, action): StateMiniBus => ({
      ...state,
      routeMiniBus: action.routeMiniBus,
    })),
  on(
    queryMiniBusActions.loadQueryMiniBussFailure,
    (state, action): StateMiniBus => ({
      ...state,
      error: action.error,
    })
  )
);
