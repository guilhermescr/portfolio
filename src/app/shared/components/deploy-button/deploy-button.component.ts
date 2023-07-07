import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deploy-button',
  templateUrl: './deploy-button.component.html',
  styleUrls: ['./deploy-button.component.scss'],
})
export class DeployButtonComponent {
  @Input() deployUrl: string = '';
  @Input() isApiDeploy: boolean = false;
}
