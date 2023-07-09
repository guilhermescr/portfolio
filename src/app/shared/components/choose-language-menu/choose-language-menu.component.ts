import { Component, EventEmitter, Output } from '@angular/core';
import { LangsService } from '../../services/langs.service';
import { Langs } from '../../models/langs.model';

@Component({
  selector: 'app-choose-language-menu',
  templateUrl: './choose-language-menu.component.html',
  styleUrls: ['./choose-language-menu.component.scss'],
})
export class ChooseLanguageMenuComponent {
  @Output() closeChooseLanguageMenuEvent = new EventEmitter();

  constructor(private langsService: LangsService) {}

  setCurrentLang(currentLang: Langs): void {
    this.langsService.changeCurrentLang(currentLang);
    this.closeChooseLanguageMenu();
  }

  closeChooseLanguageMenu(): void {
    this.closeChooseLanguageMenuEvent.emit();
  }
}
