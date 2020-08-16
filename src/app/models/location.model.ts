export class Location {
  id: number;
  location: string;

  constructor(pId = 0, pLocation = '') {
    this.id = pId;
    this.location = pLocation;
  }
}
