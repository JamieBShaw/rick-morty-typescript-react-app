export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [string];
  url: string;
  created: string;
}

export interface IResultLocations {
  results: ILocation[];
}

export interface ILocationData {
  locations: IResultLocations;
}
