export interface Country {
  flags: Flags;
  name: Name;
  independent?: boolean;
  capital: string[];
  region: Region;
  subregion: string;
  area: number;
  population: number;
  unMember: boolean;
  continents: string[];
  currencies: { [key: string]: { name: string; symbol: string } };
  languages: { [key: string]: string };
  borders: string[];
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeName };
}

export interface NativeName {
  official: string;
  common: string;
}

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Antarctic = 'Antarctic',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}
