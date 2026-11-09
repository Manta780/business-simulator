import { Competitor } from './competitor';
import { MarketEvent } from './market-event';

export interface SimulationResult {

  round: number;

  revenue: number;

  productionCost: number;

  marketingCost: number;

  financingCost: number;

  totalCosts: number;

  profit: number;

  roi: number;

  marketShare: number;

  cashFlow: number;

  esgScore: number;

  unitsSold: number;

  competitors: Competitor[];

  event: MarketEvent | null;

}