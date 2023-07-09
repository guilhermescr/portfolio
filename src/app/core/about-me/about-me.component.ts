import { Component } from '@angular/core';
import { LangsService } from 'src/app/shared/services/langs.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  aboutMe;

  constructor(private langsService: LangsService) {
    this.aboutMe = this.langsService.getPortfolioBasedOnCurrentLang().aboutMe;

    this.langsService.currentLang.subscribe(() => {
      this.aboutMe = this.langsService.getPortfolioBasedOnCurrentLang().aboutMe;
    });
  }
}
