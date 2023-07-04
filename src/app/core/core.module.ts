import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, IntroductionComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, FooterComponent, IntroductionComponent],
})
export class CoreModule {}
