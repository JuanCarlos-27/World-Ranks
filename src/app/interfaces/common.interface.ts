export const SORT_DATA_BY = {
  POPULATION: 'population',
  AREA: 'area',
  CAPITAL: 'capital',
} as const;

export type Options = 'population' | 'area' | 'capital';
