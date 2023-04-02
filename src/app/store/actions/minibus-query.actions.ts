import { createAction, props } from '@ngrx/store';
import { BusModel } from 'src/app/data-poa/model/bus-model';

export const loadQueryMiniBuss = createAction('[QueryMiniBus] Load QueryMiniBuss');

export const loadQueryMiniBussSuccess = createAction(
  '[QueryMiniBus] Load QueryMiniBuss Success',
  props<{ routeMiniBus: BusModel[] }>()
);

export const loadQueryMiniBussFailure = createAction(
  '[QueryMiniBus] Load QueryMiniBuss Failure',
  props<{ error: string }>()
);
