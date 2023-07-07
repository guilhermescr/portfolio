import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.scss'],
})
export class RoundedButtonComponent {
  @Output() emitOnClickEvent = new EventEmitter();
  @Input() tooltipText: string = '';
  @Input() buttonCategory: string = '';

  emitOnClick(): void {
    this.emitOnClickEvent.emit();
  }
}
