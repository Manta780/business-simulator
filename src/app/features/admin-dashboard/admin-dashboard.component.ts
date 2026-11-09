import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team } from '../../core/models/team';
import { RoundDecision } from '../../core/models/round-decision';
import { AdminService } from '../../core/services/admin.service';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit {


  teams: Team[] = [];

  selectedTeam: Team | null = null;

  teamDecisions: RoundDecision[] = [];


  constructor(
    private adminService: AdminService
  ) {}


  ngOnInit(): void {

    this.teams =
      this.adminService.getTeams();

  }


  selectTeam(team: Team): void {

    this.selectedTeam = team;

    this.teamDecisions =
      this.adminService.getTeamDecisions(
        team.id
      );

  }

  getStatusLabel(
    status: 'active' | 'completed'
  ): string {

    return status === 'active'
      ? 'En curso'
      : 'Completado';

  }

  getActiveTeams(): Team[] {

  return this.teams.filter(
    team => team.status === 'active'
  );

  }

  getCompletedTeams(): Team[] {

    return this.teams.filter(
      team => team.status === 'completed'
    );

  }

}