import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BusModel } from '../../model/bus-model';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { selectSuccessRoute } from 'src/app/store/selectors/bus-query.selector';
import * as busQueryActions from 'src/app/store/actions/bus-query.actions';
import * as miniBusActions from 'src/app/store/actions/minibus-query.actions';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { selectMiniBusSuccess } from 'src/app/store/selectors/minibus-query.selector';


@Component({
  selector: 'app-bus-query',
  templateUrl: './bus-query.component.html',
  styleUrls: ['./bus-query.component.scss']
})
export class BusQueryComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public displayedColumns: string[] = ['id', 'codigo', 'nome', 'itinerario'];
  public dataSource!: MatTableDataSource<any>;
  public busQuery$: Observable<BusModel[]>;
  public miniBusQuery$: Observable<BusModel[]>;
  public busQuery!: BusModel[];
  constructor(public store: Store<AppState>, private router: Router, private activedRouter: ActivatedRoute) {
    this.busQuery$ = this.store.select(selectSuccessRoute);
    this.miniBusQuery$ = this.store.select(selectMiniBusSuccess);
    this.dataSource = new MatTableDataSource<BusModel[]>();
  }

  ngOnInit(): void {
    if (this.activedRouter.snapshot.routeConfig?.path == 'bus') {
      this.store.dispatch(busQueryActions.loadQueryBuss());
    } else if (this.activedRouter.snapshot.routeConfig?.path == 'minibus') {
      this.store.dispatch(miniBusActions.loadQueryMiniBuss());
    }
    this.getBusQuery();

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getItinerary(id: number): void {
    this.router.navigate(['/itinerary', id])
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getBusQuery(): void {
    this.busQuery$.subscribe((busQuery) => {
      this.dataSource = new MatTableDataSource(busQuery);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.busQuery = busQuery;
    });
    this.miniBusQuery$.subscribe((miniBusQuery) => {
      this.dataSource = new MatTableDataSource(miniBusQuery);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.busQuery = miniBusQuery;
    });
  }
}
