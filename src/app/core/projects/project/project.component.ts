import { Component, Input } from '@angular/core';
import { Project } from 'src/app/shared/models/project.model';
import { LangsService } from 'src/app/shared/services/langs.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() project!: Project;
  @Input() index!: number;
  projectShortDescription: string = '';
  isModalOpen: boolean = false;
  hasOrder1: boolean = false;
  seeMoreMsg;

  constructor(private langsService: LangsService) {
    this.seeMoreMsg =
      this.langsService.getPortfolioBasedOnCurrentLang().portfolio.seeMoreInfo;
  }

  ngOnInit(): void {
    this.hasOrder1 = this.index % 2 === 1;
    this.getShortProjectDescription();
  }

  getShortProjectDescription(): void {
    let shortProjectDescription = this.project.description
      .split(' ')
      .slice(0, 28)
      .join(' ')
      .concat('...');

    // to avoid 4 or more dots
    if (
      shortProjectDescription.charAt(shortProjectDescription.length - 1) === '.'
    ) {
      shortProjectDescription = shortProjectDescription.slice(
        0,
        shortProjectDescription.length - 1
      );
    }

    this.projectShortDescription = shortProjectDescription;
  }

  openProjectModal(): void {
    this.isModalOpen = true;
  }

  closeProjectModal(): void {
    this.isModalOpen = false;
  }
}
