import { Component, Input } from '@angular/core';
import { Link } from '../../models/link.model';

@Component({
  selector: 'app-external-link-button',
  templateUrl: './external-link-button.component.html',
  styleUrls: ['./external-link-button.component.scss'],
})
export class ExternalLinkButtonComponent {
  @Input() link!: Link;
}
