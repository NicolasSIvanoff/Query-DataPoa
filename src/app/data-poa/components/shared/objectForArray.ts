import { Store } from '@ngrx/store';
import { ItineraryModel } from 'src/app/data-poa/model/itinerary-model';
import { AppState } from 'src/app/store/state/app.state';
import * as ItineraryActions from 'src/app/store/actions/itinerary-query.actions';
export class ModifyObject {

  constructor(public store: Store<AppState>) { }

  public objectForArray(obj: any): any {
    const array = [];
    let itineraryFiltred: ItineraryModel[] = [{ idlinha: '', nome: '', codigo: '' }]
    for (const prop in obj) {
      switch (prop) {
        case 'idlinha':
          itineraryFiltred[0].idlinha = (obj[prop]);
          break;
        case 'nome':
          itineraryFiltred[0].nome = (obj[prop]);
          break;
        case 'codigo':
          itineraryFiltred[0].codigo = (obj[prop]);
          break;
        default:
          const newObj = { id: prop, ...obj[prop] };
          array.push(newObj);
      }
    }
    this.store.dispatch(ItineraryActions.loadItinerarysSuccessFiltred({ itineraryFiltred: itineraryFiltred }));
    console.log(itineraryFiltred)
    return array;
  }
}
