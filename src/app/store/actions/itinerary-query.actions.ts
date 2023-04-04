import { createAction, props } from '@ngrx/store';
import { ItineraryFiltredModel } from 'src/app/data-poa/model/itinerary-filtred-model';
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
  props<{ itineraryFiltred: ItineraryFiltredModel[] }>()
);

export const loadItinerarysFailure = createAction(
  '[Itinerary] Load Itinerarys Failure',
  props<{ error: string }>()
);
