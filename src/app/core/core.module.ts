import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponent } from './skills/skill/skill.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    IntroductionComponent,
    AboutMeComponent,
    SkillsComponent,
    SkillComponent,
    ProjectsComponent,
    ProjectComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    IntroductionComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
  ],
})
export class CoreModule {}
