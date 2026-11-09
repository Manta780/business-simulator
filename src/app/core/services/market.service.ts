import { Injectable } from '@angular/core';

import { Competitor } from '../models/competitor';
import { MarketEvent } from '../models/market-event';

@Injectable({
  providedIn: 'root'
})
export class MarketService {


  getCompetitors(): Competitor[] {

    return [

      {
        id: 1,
        name: 'TechCorp',
        price: 110,
        productionCapacity: 6500,
        advertising: 60000,
        marketShare: 28,
        quality: 82
      },

      {
        id: 2,
        name: 'Global Industries',
        price: 125,
        productionCapacity: 7000,
        advertising: 45000,
        marketShare: 24,
        quality: 88
      },

      {
        id: 3,
        name: 'Future Manufacturing',
        price: 95,
        productionCapacity: 5000,
        advertising: 35000,
        marketShare: 18,
        quality: 75
      }

    ];

  }


  getRandomEvent(): MarketEvent | null {

    const events: MarketEvent[] = [

      {
        id: 1,
        name: 'Inflación',
        description:
          'Los costos de producción aumentan debido a una presión inflacionaria.',
        type: 'inflation',
        impact: 0.08
      },

      {
        id: 2,
        name: 'Aumento de la demanda',
        description:
          'El mercado presenta un crecimiento inesperado en la demanda.',
        type: 'demand',
        impact: 0.15
      },

      {
        id: 3,
        name: 'Aumento de materias primas',
        description:
          'El costo de las materias primas aumenta.',
        type: 'cost',
        impact: 0.10
      },

      {
        id: 4,
        name: 'Nueva regulación ambiental',
        description:
          'Una nueva regulación obliga a las empresas a aumentar su inversión ambiental.',
        type: 'regulation',
        impact: 0.12
      },

      {
        id: 5,
        name: 'Crisis económica',
        description:
          'Una desaceleración económica reduce temporalmente la demanda.',
        type: 'crisis',
        impact: -0.18
      }

    ];


    // 40% de probabilidad de que ocurra un evento

    if (Math.random() > 0.4) {

      return null;

    }


    const index =
      Math.floor(Math.random() * events.length);


    return events[index];

  }

}