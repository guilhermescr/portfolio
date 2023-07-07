import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('aboutMe') aboutMe!: ElementRef;
  @ViewChild('projects') projects!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;
  element: any;

  ngOnInit(): void {
    console.log();
  }

  scrollToTheSection(currentSection: string): void {
    switch (currentSection) {
      case 'about-me':
        console.log(this.aboutMe);
        // this.aboutMe.nativeElement.scrollIntoView();
        break;
      case 'projects':
        // this.aboutMe.nativeElement.scrollIntoView();
        break;
      case 'contact':
        // this.aboutMe.nativeElement.scrollIntoView();
        break;
      default:
        console.log('home');
    }
  }
}
