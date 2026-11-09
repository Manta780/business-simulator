export interface Team {

  id: number;

  name: string;

  students: string[];

  scenario: string;

  currentRound: number;

  status: 'active' | 'completed';

}