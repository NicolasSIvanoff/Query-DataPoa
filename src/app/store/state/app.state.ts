import { StateBus } from "../reducers/bus-query.reducer";
import { StateItinerary } from "../reducers/itinerary-query.reducer";
import { StateMiniBus } from "../reducers/minibus-query.reducer";

export interface AppState {
  busQuery: StateBus;
  itineraryQuery: StateItinerary;
  miniBusQuery: StateMiniBus;
}
