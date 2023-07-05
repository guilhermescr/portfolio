import { WrapperComponent } from './components/wrapper/wrapper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GoToTheTopComponent } from './components/go-to-the-top/go-to-the-top.component';

@NgModule({
  declarations: [WrapperComponent, GoToTheTopComponent],
  imports: [CommonModule, MatIconModule, MatTooltipModule],
  exports: [
    WrapperComponent,
    GoToTheTopComponent,
    MatIconModule,
    MatTooltipModule,
  ],
})
export class SharedModule {}
