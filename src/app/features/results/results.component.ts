import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { SimulationResult } from '../../core/models/simulation-result';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CurrencyPipe, DecimalPipe],
  templateUrl: './results.component.html',
})
export class ResultsComponent implements OnInit {

  result!: SimulationResult;


  ngOnInit(): void {

    const storedResult =
      sessionStorage.getItem('simulationResult');


    if (storedResult) {

      this.result =
        JSON.parse(storedResult);

    }

  }

}