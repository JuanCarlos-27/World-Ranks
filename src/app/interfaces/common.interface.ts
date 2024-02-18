export const SORT_DATA_BY = {
  POPULATION: 'population',
  AREA: 'area',
  CAPITAL: 'capital',
} as const;

export type SortingOptions = 'population' | 'area' | 'capital';

export type StatusOptions = 'unMember' | 'independent';
