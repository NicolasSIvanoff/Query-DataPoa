import { Component, OnInit, ViewChild } from '@angular/core';
import { ItineraryModel } from '../../model/itinerary-model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { selectItinerarySuccess, selectItinerarySuccessFiltred } from 'src/app/store/selectors/itinerary-query.selector';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ModifyObject } from '../shared/objectForArray';
import { ActivatedRoute } from '@angular/router';
import * as ActionItinerary from '../../../store/actions/itinerary-query.actions'

@Component({
  selector: 'app-query-itinerary',
  templateUrl: './query-itinerary.component.html',
  styleUrls: ['./query-itinerary.component.scss']
})
export class QueryItineraryComponent extends ModifyObject implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public displayedColumns: string[] = ['idlinha', 'nome', 'codigo', 'itinerario'];
  public dataSource!: MatTableDataSource<any>;
  public itineraryData!: ItineraryModel[];
  public itineraryData$: Observable<ItineraryModel[]>;
  public itineraryFiltred$: Observable<ItineraryModel[]>;
  public dataLine!: ItineraryModel[];
  constructor(public store: Store<AppState>, public activatedRoute: ActivatedRoute) {
    super(store);
    this.itineraryData$ = this.store.select(selectItinerarySuccess)
    this.itineraryFiltred$ = this.store.select(selectItinerarySuccessFiltred)
  }

  ngOnInit(): void {
    this.getItineraryData()
    this.getItineraryDispatch()
  }

  public getItineraryData(): void {
    this.itineraryData$.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.itineraryData = data;
      console.log('abora', this.itineraryData)
    })
    this.itineraryFiltred$.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataLine = data
      console.log('abora', this.dataLine)
      console.log('abora', this.dataLine[0])
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
}