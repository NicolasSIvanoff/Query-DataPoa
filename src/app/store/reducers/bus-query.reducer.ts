import { createReducer, on } from '@ngrx/store';
import * as BusActions from '../actions/bus-query.actions';
import { BusModel } from './../../data-poa/model/bus-model';

export const queryBusFeatureKey = 'busQuery';

export interface StateBus {
  routeBus: BusModel[];
  error: string;
}

export const initialState: StateBus = {
  routeBus: [],
  error: '',
};

export const reducer = createReducer<StateBus>(
  initialState,
  on(
    BusActions.loadQueryBussSuccess,
    (state, action): StateBus => ({
      ...state,
      routeBus: action.routeBus,
    })),

  on(BusActions.loadQueryBussFailure,
    (state, action): StateBus => ({
      ...state,
      error: action.error,
    })
  ));
