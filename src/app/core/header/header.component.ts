import {
  Component,
  EventEmitter,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { LangsService } from 'src/app/shared/services/langs.service';
import { ThemesService } from 'src/app/shared/services/themes.service';
import portfolio from 'src/portfolio.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() scrollToSectionEvent = new EventEmitter<string>();
  @Output() updateCurrentTabEvent = new EventEmitter<string>();
  @Input() currentTab: string = '';

  currentMode: string = this.themesService.getCurrentModeValue();
  isNavbarOpen: boolean = false;
  navItems: string[] = [];
  navNames: string[] = [];

  constructor(
    private renderer: Renderer2,
    private themesService: ThemesService,
    private langsService: LangsService
  ) {
    this.themesService.currentMode.subscribe((currentModeValue) => {
      this.currentMode = currentModeValue;
    });

    this.langsService.currentLang.subscribe(() => this.setNavVariables());

    this.setNavVariables();
  }

  setNavVariables(): void {
    this.navItems = portfolio.enUS.header.navItems;
    this.navNames = this.langsService.portfolio.header.navItems;
  }

  toggleCurrentMode(): void {
    this.themesService.toggleCurrentMode();
    this.renderer.setAttribute(document.body, 'class', this.currentMode);
  }

  openNavbarMenu(): void {
    this.isNavbarOpen = true;
  }

  closeNavbarMenu(): void {
    this.isNavbarOpen = false;
  }

  scrollToSection(currentSection: string): void {
    this.updateCurrentTabEvent.emit(currentSection);
    this.scrollToSectionEvent.emit(currentSection);

    this.closeNavbarMenu();
  }

  capitalizeNavItem(navItem: string): string {
    return navItem.charAt(0).toUpperCase() + navItem.slice(1);
  }
}
