export class ItineraryModel {
  constructor(
    public id: string,
    public nome: string,
    public codigo: string,
    public coordenadas:
      {
        lat: string,
        lng: string
      }
  ) { }
}
