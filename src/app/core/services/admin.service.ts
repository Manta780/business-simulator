import { Injectable } from '@angular/core';

import { Team } from '../models/team';
import { RoundDecision } from '../models/round-decision';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  private teams: Team[] = [

    {
      id: 1,
      name: 'Alpha Industries',
      students: [
        'Estudiante 1',
        'Estudiante 2'
      ],
      scenario: 'Manufactura',
      currentRound: 2,
      status: 'active'
    },

    {
      id: 2,
      name: 'NovaTech',
      students: [
        'Estudiante 3',
        'Estudiante 4'
      ],
      scenario: 'Manufactura',
      currentRound: 2,
      status: 'active'
    },

    {
      id: 3,
      name: 'Global Solutions',
      students: [
        'Estudiante 5',
        'Estudiante 6'
      ],
      scenario: 'Manufactura',
      currentRound: 1,
      status: 'active'
    },

    {
      id: 4,
      name: 'Future Corp',
      students: [
        'Estudiante 7',
        'Estudiante 8'
      ],
      scenario: 'Manufactura',
      currentRound: 3,
      status: 'completed'
    }

  ];


  private decisions: Record<number, RoundDecision[]> = {

    1: [

      {
        teamId: 1,
        round: 1,

        decisions: {

          price: 100,
          investment: 20000,
          financing: 50000,

          production: 5000,
          capacity: 6000,

          advertising: 50000,
          promotion: 20000,

          environmentalInvestment: 10000,
          socialInvestment: 10000

        }

      },

      {
        teamId: 1,
        round: 2,

        decisions: {

          price: 110,
          investment: 30000,
          financing: 40000,

          production: 5500,
          capacity: 6000,

          advertising: 65000,
          promotion: 25000,

          environmentalInvestment: 15000,
          socialInvestment: 12000

        }

      }

    ],


    2: [

      {
        teamId: 2,
        round: 1,

        decisions: {

          price: 120,
          investment: 30000,
          financing: 40000,

          production: 5500,
          capacity: 6000,

          advertising: 70000,
          promotion: 30000,

          environmentalInvestment: 15000,
          socialInvestment: 12000

        }

      },

      {
        teamId: 2,
        round: 2,

        decisions: {

          price: 115,
          investment: 25000,
          financing: 35000,

          production: 6000,
          capacity: 6500,

          advertising: 80000,
          promotion: 35000,

          environmentalInvestment: 18000,
          socialInvestment: 15000

        }

      }

    ],


    3: [

      {
        teamId: 3,
        round: 1,

        decisions: {

          price: 95,
          investment: 15000,
          financing: 60000,

          production: 4500,
          capacity: 5000,

          advertising: 40000,
          promotion: 15000,

          environmentalInvestment: 8000,
          socialInvestment: 8000

        }

      }

    ],


    4: [

      {
        teamId: 4,
        round: 1,

        decisions: {

          price: 105,
          investment: 25000,
          financing: 45000,

          production: 5200,
          capacity: 6000,

          advertising: 55000,
          promotion: 20000,

          environmentalInvestment: 12000,
          socialInvestment: 10000

        }

      },

      {
        teamId: 4,
        round: 2,

        decisions: {

          price: 108,
          investment: 30000,
          financing: 40000,

          production: 5600,
          capacity: 6200,

          advertising: 60000,
          promotion: 25000,

          environmentalInvestment: 15000,
          socialInvestment: 12000

        }

      },

      {
        teamId: 4,
        round: 3,

        decisions: {

          price: 115,
          investment: 35000,
          financing: 30000,

          production: 6000,
          capacity: 6500,

          advertising: 75000,
          promotion: 30000,

          environmentalInvestment: 20000,
          socialInvestment: 15000

        }

      }

    ]

  };


  getTeams(): Team[] {

    return this.teams;

  }


  getTeamDecisions(teamId: number): RoundDecision[] {

    const storedDecisions =
      sessionStorage.getItem('simulationDecisions');

    if (!storedDecisions) {
      console.warn(
        '⚠️ No existen decisiones guardadas.'
      );

      return [];
    }

    const decisions: RoundDecision[] =
      JSON.parse(storedDecisions);

    const teamDecisions =
      decisions.filter(
        decision => decision.teamId === teamId
      );

    console.log(
      `🎯 Decisiones encontradas para equipo ${teamId}:`,
      teamDecisions
    );

    return teamDecisions;

  }

}