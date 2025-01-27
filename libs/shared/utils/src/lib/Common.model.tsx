export interface Area {
  id: string;
  name: string;
}

export interface Location {
  _id: string;
  id: string;
  name: string;
  imageUrl: string;
}

export interface Coordinates {
  streetName: string;
  coordinates: {
    lat: number;
    lon: number;
  };
}

export interface Entry {
  id: number;
  imageUrl: string;
  name: string;
  date: string;
  description: string;
  people: string[];
  location: Coordinates;
}

export interface AreaEntry {
  _id: number;
  name: string;
  description: string;
  entries: Entry[];
}
