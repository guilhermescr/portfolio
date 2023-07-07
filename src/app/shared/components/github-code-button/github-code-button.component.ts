import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-code-button',
  templateUrl: './github-code-button.component.html',
  styleUrls: ['./github-code-button.component.scss'],
})
export class GithubCodeButtonComponent {
  @Input() repositoryUrl: string = '';
  @Input() isApiCode: boolean = false;
}
