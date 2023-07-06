import { WrapperComponent } from './components/wrapper/wrapper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GoToTheTopComponent } from './components/go-to-the-top/go-to-the-top.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';

@NgModule({
  declarations: [WrapperComponent, GoToTheTopComponent, ProjectModalComponent],
  imports: [CommonModule, MatIconModule, MatTooltipModule],
  exports: [
    WrapperComponent,
    GoToTheTopComponent,
    ProjectModalComponent,
    MatIconModule,
    MatTooltipModule,
  ],
})
export class SharedModule {}
