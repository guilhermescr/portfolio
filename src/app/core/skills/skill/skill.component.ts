import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  @Input() skillSrc: string = '';
  skillName: string = '';

  ngOnInit(): void {
    this.getSkillName();
  }

  getSkillName(): void {
    this.skillName = this.skillSrc
      .replace('../../../assets/img/skills/', '')
      .replace('.webp', '')
      .replace('.png', '');

    if (this.skillName.includes('html5') || this.skillName.includes('css3')) {
      this.skillName = this.skillName.toUpperCase();
    }

    this.skillName =
      this.skillName.charAt(0).toUpperCase() + this.skillName.slice(1);
  }
}
