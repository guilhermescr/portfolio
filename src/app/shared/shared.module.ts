import { WrapperComponent } from './components/wrapper/wrapper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [WrapperComponent],
  imports: [CommonModule, MatIconModule, MatTooltipModule],
  exports: [WrapperComponent, MatIconModule, MatTooltipModule],
})
export class SharedModule {}
