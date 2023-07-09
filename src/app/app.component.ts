import { Component, ElementRef, HostListener } from '@angular/core';
import portfolio from 'src/portfolio.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  headerWrapperSticky = {
    'background-color': '#000',
    'max-width': '100vw',
    position: 'sticky',
    top: '0',
    'z-index': '2',
  };
  isHeaderWrapperSticky: boolean = false;
  isChooseLanguageMenuOpen: boolean = true;

  tabsScrollTop: number[] = [];
  tabs = portfolio.enUS.header.navItems;
  currentTab: string = 'home';

  @HostListener('window:scroll') onWindowScroll() {
    this.isHeaderWrapperSticky = window.scrollY > 0;

    const latestTabs: string[] = [];

    this.tabsScrollTop.forEach((tabScrollTop, index) => {
      if (window.scrollY >= tabScrollTop) {
        latestTabs.push(this.tabs[index]);
      }
    });

    const latestTab = latestTabs[latestTabs.length - 1];

    this.updateCurrentTab(latestTab);
  }

  @HostListener('window:resize') onWindowResize() {
    this.fillTabsScrollTopArray();
  }

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.fillTabsScrollTopArray();
  }

  scrollToSection(currentSection: string): void {
    const sectionToBeFocused: HTMLElement =
      this.elementRef.nativeElement.querySelector(`#${currentSection}`);

    if (sectionToBeFocused) {
      window.scrollTo(0, sectionToBeFocused.offsetTop);
    }
  }

  fillTabsScrollTopArray(): void {
    this.tabsScrollTop = [];

    this.tabs.forEach((tab, index) => {
      const tabElement: HTMLElement =
        this.elementRef.nativeElement.querySelector(`#${tab}`);

      if (index + 1 === this.tabs.length) {
        this.tabsScrollTop.push(tabElement.offsetTop - 400);
      } else {
        this.tabsScrollTop.push(tabElement.offsetTop - 100);
      }
    });
  }

  updateCurrentTab(updatedTab: string): void {
    this.currentTab = updatedTab;
  }

  closeChooseLanguageMenu(): void {
    this.isChooseLanguageMenuOpen = false;
  }
}
