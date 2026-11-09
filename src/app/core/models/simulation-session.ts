export interface SimulationSession {

  id: string;

  scenario: 'manufacturing' | 'commerce';

  totalRounds: number;

  currentRound: number;

  status: 'waiting' | 'active' | 'completed';

  teams: number[];

}