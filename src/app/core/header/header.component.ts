import {
  Component,
  EventEmitter,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { ThemesService } from 'src/app/shared/services/themes.service';

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

  constructor(
    private renderer: Renderer2,
    private themesService: ThemesService
  ) {
    this.themesService.currentMode.subscribe((currentModeValue) => {
      this.currentMode = currentModeValue;
    });
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
}
