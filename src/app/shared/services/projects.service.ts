import { Injectable } from '@angular/core';
import portfolio from 'src/portfolio.json';
import { Project } from '../models/project.model';
import { LangsService } from './langs.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: Project[] =
    this.langsService.getPortfolioBasedOnCurrentLang().portfolio.projects;

  constructor(private langsService: LangsService) {
    this.langsService.currentLang.subscribe(() => {
      this.projects =
        this.langsService.getPortfolioBasedOnCurrentLang().portfolio.projects;
    });
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectTitle: string): Project {
    return this.projects.find((project) => project.title === projectTitle)!;
  }
}
