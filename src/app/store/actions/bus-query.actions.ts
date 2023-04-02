
import { createAction, props } from '@ngrx/store';
import { BusModel } from 'src/app/data-poa/model/bus-model';

export const loadQueryBuss = createAction('[QueryBus] Load QueryBuss');

export const loadQueryBussSuccess = createAction(
  '[QueryBus] Load QueryBuss Success',
  props<{ routeBus: BusModel[] }>()
);

export const loadQueryBussFailure = createAction(
  '[QueryBus] Load QueryBuss Failure',
  props<{ error: string }>()
);
