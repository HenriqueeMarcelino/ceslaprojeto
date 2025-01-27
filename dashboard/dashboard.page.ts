import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard-service';
import { DashboardData } from '../model/dashboard-data';
import { Projects } from '../model/projects';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {
  dashboardData: DashboardData[] = [];
  projects: Projects[] = [];

  constructor(
    private dashboardService: DashboardService
  ) { 
  }

  ngOnInit() {
    this.getDashboardData();
    this.getProjects();
  }

  getDashboardData() {
    this.dashboardData = this.dashboardService.getDashboardData();
  }

  getProjects(){
    this.projects = this.dashboardService.getProjectData();
  }

}
