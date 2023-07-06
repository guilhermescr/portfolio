import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from 'src/app/shared/models/project.model';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
})
export class ProjectModalComponent {
  @Input() project!: Project;
  @Output() returnToProjectsEvent = new EventEmitter();

  returnToProjectsSection(): void {
    this.returnToProjectsEvent.emit();
  }
}
