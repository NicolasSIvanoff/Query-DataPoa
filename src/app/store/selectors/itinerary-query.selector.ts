import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromItinerary from '../reducers/itinerary-query.reducer';

export const selectItineraryState =
  createFeatureSelector<fromItinerary.StateItinerary>(
    fromItinerary.itineraryFeatureKey
  );

export const selectItinerarySuccess = createSelector(
  selectItineraryState,
  (state) => state.itineraryData
);

export const selectItinerarySuccessFiltred = createSelector(
  selectItineraryState,
  (state) => state.itineraryFiltred
);

export const selectItineraryError = createSelector(
  selectItineraryState,
  (state) => state.error
);
