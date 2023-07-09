import { Component } from '@angular/core';
import { LangsService } from 'src/app/shared/services/langs.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footer: any;

  constructor(private langsService: LangsService) {
    this.setFooterValue();

    this.langsService.currentLang.subscribe(() => this.setFooterValue());
  }

  setFooterValue(): void {
    this.footer = {
      location:
        this.langsService.getPortfolioBasedOnCurrentLang().aboutMe.location,
      createdBy:
        this.langsService.getPortfolioBasedOnCurrentLang().footer.createdBy,
    };
  }
}
