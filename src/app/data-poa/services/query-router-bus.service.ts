import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusModel } from '../model/bus-model';
import { ItineraryModel } from '../model/itinerary-model';


@Injectable({
  providedIn: 'root'
})
export class QueryRouterBusService {

  constructor(private http: HttpClient) { }
  public apiBus = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=';
  public apiItinerary = 'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=';

  public getApiBus(): Observable<BusModel[]> {
    return this.http.get<BusModel[]>(`${this.apiBus}o`);
  }
  public getApiMiniBus(): Observable<BusModel[]> {
    return this.http.get<BusModel[]>(`${this.apiBus}l`);
  }
  public getApiItinerary(id: number): Observable<ItineraryModel[]> {
    return this.http.get<ItineraryModel[]>(`${this.apiItinerary}${id}`);
  }
}
