import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  currentMode: string = 'dark';
  currentTab: string = 'home';
  isNavbarOpen: boolean = false;

  constructor(private renderer: Renderer2) {}

  toggleCurrentMode(): void {
    this.currentMode = this.currentMode === 'dark' ? 'light' : 'dark';
    this.renderer.setAttribute(document.body, 'class', this.currentMode);
  }

  openNavbarMenu(): void {
    this.isNavbarOpen = true;
  }

  closeNavbarMenu(): void {
    this.isNavbarOpen = false;
  }
}
