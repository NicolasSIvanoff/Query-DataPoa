import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteMapComponent } from '../route-map/route-map.component';
import { MapRoutingModule } from './map.routing.module';

@NgModule({
  declarations: [
    RouteMapComponent

  ],
  imports: [
    CommonModule,
    MapRoutingModule
  ]
})
export class MapModule { }
