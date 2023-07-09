import { Component } from '@angular/core';
import { LangsService } from 'src/app/shared/services/langs.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent {
  h1;

  constructor(private langsService: LangsService) {
    this.h1 = this.langsService.portfolio.introduction.h1;

    this.langsService.currentLang.subscribe(() => {
      this.h1 = this.langsService.portfolio.introduction.h1;
    });
  }
}
