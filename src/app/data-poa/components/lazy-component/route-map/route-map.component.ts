import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Icon, Map, Polyline, marker, tileLayer } from 'leaflet';
import { Observable } from 'rxjs';
import { selectItinerarySuccessFiltred } from 'src/app/store/selectors/itinerary-query.selector';
import { AppState } from 'src/app/store/state/app.state';
import * as ActionItinerary from '../../../../store/actions/itinerary-query.actions';
import { ItineraryFiltredModel } from '../../../model/itinerary-filtred-model';
@Component({
  selector: 'app-route-map',
  templateUrl: './route-map.component.html',
  styleUrls: ['./route-map.component.scss']
})
export class RouteMapComponent implements OnInit {
  public itineraryFiltred!: ItineraryFiltredModel[];
  public itineraryFiltred$: Observable<ItineraryFiltredModel[]>;
  constructor(public store: Store<AppState>, public activatedRoute: ActivatedRoute) {
    this.itineraryFiltred$ = this.store.select(selectItinerarySuccessFiltred)
  }

  ngOnInit(): void {
    this.getItineraryDispatch()
    this.getItineraryData()
    window.scrollTo(0, 0);

  }
  public getItineraryDispatch(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.store.dispatch(ActionItinerary.loadItinerarys({ IdItinerary: id }));
  }


  public getItineraryData(): void {
    this.itineraryFiltred$.subscribe(data => {
      this.itineraryFiltred = data
      if (data.length > 0) {
        this.loadMap()
      }
    })
  }

  public loadMap(): void {
    const map = new Map('map').setView([parseFloat(this.itineraryFiltred[0].lat), parseFloat(this.itineraryFiltred[0].lng)], 13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    const redIcon = new Icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    const markers: any[] = [];
    this.itineraryFiltred.forEach(point => {
      const markerItem = marker([parseFloat(point.lat), parseFloat(point.lng)], { icon: redIcon }).addTo(map)
        .on('click', () => {
          const popupContent = `
            <p>Veja imagens dessa parada no google maps</p>
            <a href="https://www.google.com/maps/?q=${point.lat},${point.lng}" target="_blank" >Link para abrir no Maps</a>

        `;
          markerItem.bindPopup(popupContent).openPopup();
        });
      markers.push(markerItem.getLatLng());

    });

    if (markers.length > 0) {
      const polyline = new Polyline(markers, { color: '#0dcaf0', weight: 7 }).addTo(map);

      map.fitBounds(polyline.getBounds());
    }
  }
}
