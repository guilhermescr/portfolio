import { Component, Input } from '@angular/core';
import { Project } from 'src/app/shared/models/project.model';

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

  ngOnInit(): void {
    this.hasOrder1 = this.index % 2 === 1;
    this.getShortProjectDescription();
  }

  getShortProjectDescription(): void {
    const shortProjectDescription = this.project.description
      .split(' ')
      .slice(0, 31)
      .join(' ')
      .concat('...');

    this.projectShortDescription = shortProjectDescription;
  }

  openProjectModal(): void {
    this.isModalOpen = true;
  }

  closeProjectModal(): void {
    this.isModalOpen = false;
  }
}
