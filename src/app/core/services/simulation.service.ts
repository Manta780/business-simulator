import { Injectable } from '@angular/core';

import { Decisions } from '../models/decisions';
import { SimulationResult } from '../models/simulation-result';

import { MarketService } from './market.service';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {


  constructor(
    private marketService: MarketService
  ) {}


  simulateRound(
    decisions: Decisions,
    round: number
  ): SimulationResult {


    /*
     * Obtener información del mercado
     */

    const competitors =
      this.marketService.getCompetitors();


    /*
     * Evento aleatorio
     */

    const event =
      this.marketService.getRandomEvent();


    /*
     * Demanda base
     */

    let baseDemand = 5500;


    /*
     * Efecto del precio
     */

    const priceEffect =
      Math.max(
        0.5,
        1.2 - decisions.price / 500
      );


    /*
     * Efecto del marketing
     */

    const marketingEffect =
      (decisions.advertising +
       decisions.promotion) / 10000;


    /*
     * Efecto del evento
     */

    if (event) {

      switch (event.type) {

        case 'demand':

          baseDemand *=
            1 + event.impact;

          break;


        case 'crisis':

          baseDemand *=
            1 + event.impact;

          break;

      }

    }


    /*
     * Demanda estimada
     */

    const estimatedDemand =
      baseDemand *
      priceEffect *
      (1 + marketingEffect);


    /*
     * Unidades vendidas
     */

    const unitsSold =
      Math.min(
        Math.floor(estimatedDemand),
        decisions.production
      );


    /*
     * Ingresos
     */

    const revenue =
      unitsSold *
      decisions.price;


    /*
     * Costos de producción
     */

    let productionCost =
      decisions.production *
      55;


    /*
     * Eventos que aumentan costos
     */

    if (event?.type === 'inflation') {

      productionCost *=
        1 + event.impact;

    }


    if (event?.type === 'cost') {

      productionCost *=
        1 + event.impact;

    }


    /*
     * Marketing
     */

    const marketingCost =
      decisions.advertising +
      decisions.promotion;


    /*
     * Financiamiento
     */

    const financingCost =
      decisions.financing *
      0.05;


    /*
     * Costos regulatorios
     */

    let regulatoryCost = 0;


    if (event?.type === 'regulation') {

      regulatoryCost =
        decisions.environmentalInvestment *
        event.impact;

    }


    /*
     * Costos totales
     */

    const totalCosts =
      productionCost +
      marketingCost +
      financingCost +
      decisions.investment +
      decisions.environmentalInvestment +
      decisions.socialInvestment +
      regulatoryCost;


    /*
     * Utilidad
     */

    const profit =
      revenue -
      totalCosts;


    /*
     * ROI
     */

    const investedCapital =
      decisions.investment +
      decisions.financing;


    const roi =
      investedCapital > 0
        ? (profit / investedCapital) * 100
        : 0;


    /*
     * Market Share
     */

    const totalMarket =
      22000;


    const marketShare =
      (unitsSold / totalMarket) * 100;


    /*
     * Flujo de caja
     */

    const cashFlow =
      revenue -
      totalCosts;


    /*
     * ESG
     */

    const esgScore =
      Math.min(
        100,

        40 +

        decisions.environmentalInvestment /
        500 +

        decisions.socialInvestment /
        500
      );


    /*
     * Resultado final
     */

    return {

      round,

      revenue,

      productionCost,

      marketingCost,

      financingCost,

      totalCosts,

      profit,

      roi,

      marketShare,

      cashFlow,

      esgScore,

      unitsSold,

      competitors,

      event

    };

  }

}