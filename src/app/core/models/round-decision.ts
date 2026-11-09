import { Decisions } from './decisions';

export interface RoundDecision {

  teamId: number;

  round: number;

  decisions: Decisions;

}