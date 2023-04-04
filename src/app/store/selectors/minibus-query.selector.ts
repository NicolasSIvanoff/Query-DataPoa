import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromQueryMiniBus from '../reducers/minibus-query.reducer';

export const selectQueryMiniBusState =
  createFeatureSelector<fromQueryMiniBus.StateMiniBus>(
    fromQueryMiniBus.queryMiniBusFeatureKey
  );

export const selectMiniBusSuccess = createSelector(
  selectQueryMiniBusState,
  (state) => state.routeMiniBus
);

export const selectMiniBusError = createSelector(
  selectQueryMiniBusState,
  (state) => state.error
);
