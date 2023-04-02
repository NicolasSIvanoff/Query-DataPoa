export class ItineraryModel {
  constructor(
    public idlinha: string,
    public nome: string,
    public codigo: string,
    public coordenadas?: [
      {
        latitude: string,
        longitude: string
      }]
  ) { }
}
