import { createAction, props } from '@ngrx/store';
import { ItineraryModel } from 'src/app/data-poa/model/itinerary-model';

export const loadItinerarys = createAction(
  '[Itinerary] Load Itinerarys',
  props<{ IdItinerary: number }>()
);

export const loadItinerarysSuccess = createAction(
  '[Itinerary] Load Itinerarys Success',
  props<{ itinerary: ItineraryModel[] }>()
);
export const loadItinerarysSuccessFiltred = createAction(
  '[Itinerary] Load Itinerarys Success Filtred',
  props<{ itineraryFiltred: ItineraryModel[] }>()
);

export const loadItinerarysFailure = createAction(
  '[Itinerary] Load Itinerarys Failure',
  props<{ error: string }>()
);
