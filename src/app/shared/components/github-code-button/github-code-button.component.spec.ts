import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubCodeButtonComponent } from './github-code-button.component';

describe('GithubCodeButtonComponent', () => {
  let component: GithubCodeButtonComponent;
  let fixture: ComponentFixture<GithubCodeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubCodeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubCodeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
