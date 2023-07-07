import { Component } from '@angular/core';
import { Project } from 'src/app/shared/models/project.model';
import { ProjectsService } from 'src/app/shared/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [];
  fewProjects: Project[] = [];
  initialProjectsAmount: number = 6;
  areAllProjectsActive: boolean = false;

  constructor(private projectsService: ProjectsService) {
    this.projects = this.projectsService.getProjects();
    this.fewProjects = this.projects.slice(0, this.initialProjectsAmount);
  }

  showAllProjects(): void {
    this.areAllProjectsActive = true;
  }

  showFewProjects(): void {
    this.areAllProjectsActive = false;
  }
}
