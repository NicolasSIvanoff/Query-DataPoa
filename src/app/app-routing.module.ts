import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusQueryComponent } from './data-poa/components/bus-query/bus-query.component';
import { QueryItineraryComponent } from './data-poa/components/query-itinerary/query-itinerary.component';

const routes: Routes = [
  { path: '', redirectTo: 'bus', pathMatch: 'full' },
  { path: 'bus', component: BusQueryComponent },
  { path: 'itinerary/:id', component: QueryItineraryComponent },
  { path: 'minibus', component: BusQueryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
