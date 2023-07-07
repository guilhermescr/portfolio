import { WrapperComponent } from './components/wrapper/wrapper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GoToTheTopComponent } from './components/go-to-the-top/go-to-the-top.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { GithubCodeButtonComponent } from './components/github-code-button/github-code-button.component';
import { ExternalLinkButtonComponent } from './components/external-link-button/external-link-button.component';
import { RoundedButtonComponent } from './components/rounded-button/rounded-button.component';
import { DeployButtonComponent } from './components/deploy-button/deploy-button.component';

@NgModule({
  declarations: [
    WrapperComponent,
    GoToTheTopComponent,
    ProjectModalComponent,
    GithubCodeButtonComponent,
    ExternalLinkButtonComponent,
    RoundedButtonComponent,
    DeployButtonComponent,
  ],
  imports: [CommonModule, MatIconModule, MatTooltipModule],
  exports: [
    WrapperComponent,
    GoToTheTopComponent,
    ProjectModalComponent,
    GithubCodeButtonComponent,
    ExternalLinkButtonComponent,
    RoundedButtonComponent,
    DeployButtonComponent,
    MatIconModule,
    MatTooltipModule,
  ],
})
export class SharedModule {}
