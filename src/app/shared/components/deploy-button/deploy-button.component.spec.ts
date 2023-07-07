import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployButtonComponent } from './deploy-button.component';

describe('DeployButtonComponent', () => {
  let component: DeployButtonComponent;
  let fixture: ComponentFixture<DeployButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeployButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeployButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
