import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import * as fromBusReducer from './bus-query.reducer';
import * as fromMiniBusReducer from './minibus-query.reducer';
import * as fromItineraryReducer from './itinerary-query.reducer';

export const reducers: ActionReducerMap<AppState> = {
  [fromBusReducer.queryBusFeatureKey]: fromBusReducer.reducer,
  [fromItineraryReducer.itineraryFeatureKey]: fromItineraryReducer.reducerItinerary,
  [fromMiniBusReducer.queryMiniBusFeatureKey]: fromMiniBusReducer.reducerRouteMiniBus,
};
