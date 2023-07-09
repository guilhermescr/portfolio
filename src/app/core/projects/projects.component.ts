import { Component } from '@angular/core';
import { Project } from 'src/app/shared/models/project.model';
import { LangsService } from 'src/app/shared/services/langs.service';
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
  projectsTexts!: {
    takeALook: string;
    title: string;
    seeProjects: {
      seeAll: string;
      seeLess: string;
    };
  };

  constructor(
    private projectsService: ProjectsService,
    private langsService: LangsService
  ) {
    this.setProjectsValues();

    this.langsService.currentLang.subscribe(() => this.setProjectsValues());
  }

  setProjectsValues(): void {
    this.projects = this.projectsService.getProjects();
    this.fewProjects = this.projects.slice(0, this.initialProjectsAmount);

    this.projectsTexts = {
      takeALook:
        this.langsService.getPortfolioBasedOnCurrentLang().portfolio.takeALook,
      title:
        this.langsService.getPortfolioBasedOnCurrentLang().portfolio
          .projectsTitle,
      seeProjects:
        this.langsService.getPortfolioBasedOnCurrentLang().portfolio
          .seeProjects,
    };
  }

  showAllProjects(): void {
    this.areAllProjectsActive = true;
  }

  showFewProjects(): void {
    this.areAllProjectsActive = false;
  }
}
