import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BusModel } from '../../model/bus-model';
import { Observable, Subscription } from 'rxjs';
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
export class BusQueryComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public displayedColumns: string[] = ['id', 'codigo', 'nome', 'itinerario'];
  public dataSource!: MatTableDataSource<any>;
  public busQuery$: Observable<BusModel[]>;
  public miniBusQuery$: Observable<BusModel[]>;
  public busQuery!: BusModel[];
  public findBusMessage: string = 'Encontre as paradas do seu ônibus aqui';
  public subscription: Subscription[] = [];

  constructor(public store: Store<AppState>, private router: Router, private activedRouter: ActivatedRoute) {
    this.busQuery$ = this.store.select(selectSuccessRoute);
    this.miniBusQuery$ = this.store.select(selectMiniBusSuccess);
    this.dataSource = new MatTableDataSource<BusModel[]>();
  }

  public ngOnInit(): void {
    this.verifyRoute();
    this.getBusQuery();
  }

  ngAfterViewInit(): void {
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
    this.subscription.push(
      this.busQuery$.subscribe((busQuery) => {
        this.dataSource = new MatTableDataSource(busQuery);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.busQuery = busQuery;
      }));
    this.subscription.push(
      this.miniBusQuery$.subscribe((miniBusQuery) => {
        this.dataSource = new MatTableDataSource(miniBusQuery);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.busQuery = miniBusQuery;
      }));
  }

  public verifyRoute(): void {
    if (this.activedRouter.snapshot.routeConfig?.path == 'bus') {
      this.store.dispatch(busQueryActions.loadQueryBuss());
      this.findBusMessage = 'Encontre as paradas do seu ônibus aqui'
    } else if (this.activedRouter.snapshot.routeConfig?.path == 'minibus') {
      this.store.dispatch(miniBusActions.loadQueryMiniBuss());
      this.findBusMessage = 'Encontre as paradas do seu micro-ônibus aqui'
    }
  }

  public ngOnDestroy(): void {
    this.subscription.forEach((interrupted) => interrupted.unsubscribe());
  }

}
