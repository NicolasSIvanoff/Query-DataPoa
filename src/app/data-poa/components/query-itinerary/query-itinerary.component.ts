import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectItinerarySuccess, selectItinerarySuccessFiltred } from 'src/app/store/selectors/itinerary-query.selector';
import { AppState } from 'src/app/store/state/app.state';
import * as ActionItinerary from '../../../store/actions/itinerary-query.actions';
import { ItineraryFiltredModel } from '../../model/itinerary-filtred-model';
import { ItineraryModel } from '../../model/itinerary-model';

@Component({
  selector: 'app-query-itinerary',
  templateUrl: './query-itinerary.component.html',
  styleUrls: ['./query-itinerary.component.scss']
})
export class QueryItineraryComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public displayedColumns: string[] = ['idlinha', 'nome', 'codigo', 'itinerario'];
  public dataSource!: MatTableDataSource<any>;
  public itineraryData!: ItineraryModel[];
  public itineraryData$: Observable<ItineraryModel[]>;
  public itineraryFiltred$: Observable<ItineraryFiltredModel[]>;
  public dataLine!: ItineraryFiltredModel[];
  constructor(public store: Store<AppState>, public activatedRoute: ActivatedRoute, public router: Router) {
    this.itineraryData$ = this.store.select(selectItinerarySuccess)
    this.itineraryFiltred$ = this.store.select(selectItinerarySuccessFiltred)
  }

  ngOnInit(): void {
    this.getItineraryData()
    this.getItineraryDispatch()
  }

  public getItineraryData(): void {
    this.itineraryFiltred$.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataLine = data;
    })

    this.itineraryData$.subscribe(data => {
      this.itineraryData = data;
    })
  }

  public getItineraryDispatch(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.store.dispatch(ActionItinerary.loadItinerarys({ IdItinerary: id }));
  }

  public navigateToMaps(latitude: string, longitude: string): void {
    const url = `https://www.google.com/maps/?q=${latitude},${longitude}`
    window.open(url, '_blank');
  }

  public openMap(id: string): void {
    this.router.navigate(['/map', id])
  }
}
