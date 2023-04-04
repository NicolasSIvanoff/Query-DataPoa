import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBusQuery from '../reducers/bus-query.reducer'

export const selectPageBusState = createFeatureSelector<fromBusQuery.StateBus>(
  fromBusQuery.queryBusFeatureKey
);

export const selectSuccessRoute = createSelector(
  selectPageBusState,
  (state) => state.routeBus
);

export const selectRouteError = createSelector(
  selectPageBusState,
  (state) => state.error
);
