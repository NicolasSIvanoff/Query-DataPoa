import { CoordinatesModel } from "./coordinates-model";
export class ItineraryModel {
  constructor(
    public id: string,
    public nome: string,
    public codigo: string,
    public coordenadas: CoordinatesModel

  ) { }
}
