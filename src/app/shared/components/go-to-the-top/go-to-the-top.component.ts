import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-go-to-the-top',
  templateUrl: './go-to-the-top.component.html',
  styleUrls: ['./go-to-the-top.component.scss'],
})
export class GoToTheTopComponent {
  isButtonVisible: boolean = false;
  hasClicked: boolean = false;

  @HostListener('window:scroll') onWindowScroll() {
    this.isButtonVisible = window.scrollY >= 180;

    if (window.scrollY <= 40) {
      this.hasClicked = false;
    }
  }

  goToTheTopOfThePage(): void {
    if (this.hasClicked) return;

    window.scrollTo(0, 0);

    this.hasClicked = true;
  }
}
