import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseLanguageMenuComponent } from './choose-language-menu.component';

describe('ChooseLanguageMenuComponent', () => {
  let component: ChooseLanguageMenuComponent;
  let fixture: ComponentFixture<ChooseLanguageMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseLanguageMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseLanguageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
