import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusQueryComponent } from './data-poa/components/bus-query/bus-query.component';
import { QueryItineraryComponent } from './data-poa/components/query-itinerary/query-itinerary.component';
import { RouteMapComponent } from './data-poa/components/route-map/route-map.component';
import { ErrorComponent } from './data-poa/components/error/error.component';
const routes: Routes = [
  { path: '', redirectTo: 'bus', pathMatch: 'full' },
  { path: 'bus', component: BusQueryComponent },
  { path: 'itinerary/:id', component: QueryItineraryComponent },
  { path: 'minibus', component: BusQueryComponent },
  { path: 'map/:id', component: RouteMapComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
