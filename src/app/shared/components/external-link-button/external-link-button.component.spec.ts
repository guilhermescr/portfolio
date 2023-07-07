import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalLinkButtonComponent } from './external-link-button.component';

describe('ExternalLinkButtonComponent', () => {
  let component: ExternalLinkButtonComponent;
  let fixture: ComponentFixture<ExternalLinkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalLinkButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalLinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
