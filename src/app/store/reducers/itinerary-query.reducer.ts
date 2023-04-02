import { createReducer, on } from '@ngrx/store';
import * as ItineraryActions from '../actions/itinerary-query.actions';
import { ItineraryModel } from 'src/app/data-poa/model/itinerary-model';

export const itineraryFeatureKey = 'itineraryQuery';

export interface StateItinerary {
  itineraryData: ItineraryModel[];
  itineraryFiltred: ItineraryModel[];
  error: string;
}

export const initialState: StateItinerary = {
  itineraryData: [],
  itineraryFiltred: [],
  error: '',
};

export const reducerItinerary = createReducer(
  initialState,
  on(
    ItineraryActions.loadItinerarysSuccess,
    (state, action): StateItinerary => ({
      ...state,
      itineraryData: action.itinerary,
    })
  ),
  on(
    ItineraryActions.loadItinerarysSuccessFiltred,
    (state, action): StateItinerary => ({
      ...state,
      itineraryFiltred: action.itineraryFiltred,
    })
  ),
  on(
    ItineraryActions.loadItinerarysFailure,
    (state, action): StateItinerary => ({
      ...state,
      error: action.error,
    })
  )
);
