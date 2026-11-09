import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RoundDecision } from '../../core/models/round-decision';
import { Decisions } from '../../core/models/decisions';
import { SimulationService } from '../../core/services/simulation.service';

@Component({
  selector: 'app-simulation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './simulation.component.html'
})
export class SimulationComponent implements OnInit {

  ngOnInit(): void {
    this.loadSimulationState();
  }

  currentRound = 1;
  totalRounds = 3;
  private readonly currentTeamId = 1;
  decisions: Decisions = {

    price: 100,
    investment: 20000,
    financing: 50000,

    production: 5000,
    capacity: 6000,

    advertising: 50000,
    promotion: 20000,

    environmentalInvestment: 10000,
    socialInvestment: 10000

  };


  constructor(
    private simulationService: SimulationService,
    private router: Router
  ) {}

  private loadSimulationState(): void {

  const storedRound =
    sessionStorage.getItem('currentRound');


  if (storedRound) {

    this.currentRound =
      Number(storedRound);

  }

}

  simulateRound(): void {

    const result = this.simulationService.simulateRound(
      this.decisions,
      this.currentRound
    );

    const roundDecision: RoundDecision = {

      teamId: this.currentTeamId,

      round: this.currentRound,

      decisions: { ...this.decisions }

    };

    const storedDecisions =
      sessionStorage.getItem('simulationDecisions');

    const decisionsHistory = storedDecisions
      ? JSON.parse(storedDecisions)
    : [];

    decisionsHistory.push(roundDecision);

    console.log(
      '💾 Guardando decisiones:',
      decisionsHistory
    );

    /*sessionStorage.setItem(
      'simulationDecisions',
      JSON.stringify(decisionsHistory)
    );*/

    sessionStorage.setItem(
      'TEST_DECISIONS',
      'HOLA_DESDE_SIMULATION'
    );

    console.log(
      '✅ Decisiones guardadas:',
      sessionStorage.getItem('simulationDecisions')
    );
    /*
    * Obtener resultados anteriores
    */

    console.log(
      'TEST_DECISIONS:',
      sessionStorage.getItem('TEST_DECISIONS')
    );

    const storedResults =
      sessionStorage.getItem('simulationResults');


    const results = storedResults
      ? JSON.parse(storedResults)
      : [];


    /*
    * Guardar resultado de la ronda actual
    */

    results.push(result);


    sessionStorage.setItem(
      'simulationResults',
      JSON.stringify(results)
    );


    /*
    * Mantener también el resultado actual
    * para que Results pueda utilizarlo
    */

    sessionStorage.setItem(
      'simulationResult',
      JSON.stringify(result)
    );


    console.log(
      `Resultado de la ronda ${this.currentRound}:`,
      result
    );


    /*
    * Avanzar a la siguiente ronda
    */

    if (this.currentRound < this.totalRounds) {

      this.currentRound++;

    }
    
    sessionStorage.setItem(
      'currentRound',
      this.currentRound.toString()
    );

    this.router.navigate(['/results']);

  }

}