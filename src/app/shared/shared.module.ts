import { WrapperComponent } from './components/wrapper/wrapper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WrapperComponent],
  imports: [CommonModule],
  exports: [WrapperComponent],
})
export class SharedModule {}
