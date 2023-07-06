import { Injectable } from '@angular/core';
import portfolio from 'src/portfolio.json';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: Project[] = portfolio.enUS.projects;

  constructor() {}

  getProjects() {
    return this.projects;
  }

  getProject(projectTitle: string): Project {
    return this.projects.find((project) => project.title === projectTitle)!;
  }
}
