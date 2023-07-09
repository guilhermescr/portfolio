import { Component } from '@angular/core';
import { LangsService } from 'src/app/shared/services/langs.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  h2;

  constructor(private langsService: LangsService) {
    this.h2 = this.langsService.getPortfolioBasedOnCurrentLang().skills.h2;

    this.langsService.currentLang.subscribe(() => {
      this.h2 = this.langsService.getPortfolioBasedOnCurrentLang().skills.h2;
    });
  }
}
