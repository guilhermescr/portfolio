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

  constructor(private projectsService: ProjectsService) {
    this.projects = this.projectsService.getProjects();
  }
}
