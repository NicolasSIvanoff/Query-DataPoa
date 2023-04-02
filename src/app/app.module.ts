import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './data-poa/components/error/error.component';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/root.reducer';
import { BusQueryComponent } from './data-poa/components/bus-query/bus-query.component';
import { BusQueryEffects } from './store/effects/bus-query.effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { QueryItineraryComponent } from './data-poa/components/query-itinerary/query-itinerary.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ItineraryEffects } from './store/effects/itinerary-query.effects';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './data-poa/components/shared/footer/footer.component';
import { HeaderComponent } from './data-poa/components/shared/header/header.component';
import { MiniBusQueryEffects } from './store/effects/minibus-query-effects';
@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    BusQueryComponent,
    QueryItineraryComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    EffectsModule.forRoot([
      BusQueryEffects,
      ItineraryEffects,
      MiniBusQueryEffects
    ]),
    StoreModule.forRoot(reducers, {}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
