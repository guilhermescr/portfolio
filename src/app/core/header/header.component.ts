import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';
import { ThemesService } from 'src/app/shared/services/themes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() scrollToTheSectionEvent = new EventEmitter<string>();
  currentMode: string = this.themesService.getCurrentModeValue();
  currentTab: string = 'home';
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

  scrollToTheSection(): void {
    this.scrollToTheSectionEvent.emit(this.currentTab);
  }
}
