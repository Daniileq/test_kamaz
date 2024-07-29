export enum Bit {
  EUR = 'EUR',
  GBP = 'GBP',
  USD = 'USD',
}
export interface IDataVal {
  code: string;
  description: string;
  rate: string;
  rate_float: number;
  symbol: string;
}
export interface Time {
  updated: string;
  updatedISO: string;
  updateduk: string;
}

export interface Valute {
  [key: string]: IDataVal;
}

export interface Article {
  bpi: Valute;
  chartName: string;
  disclaimer: string;
  time: Time;
}
