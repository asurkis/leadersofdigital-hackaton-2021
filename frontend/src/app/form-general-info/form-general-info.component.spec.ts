import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeneralInfoComponent } from './form-general-info.component';

describe('FormGeneralInfoComponent', () => {
  let component: FormGeneralInfoComponent;
  let fixture: ComponentFixture<FormGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGeneralInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
