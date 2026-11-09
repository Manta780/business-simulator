export interface MarketEvent {

  id: number;

  name: string;

  description: string;

  type: 'inflation' | 'demand' | 'cost' | 'regulation' | 'crisis';

  impact: number;

}