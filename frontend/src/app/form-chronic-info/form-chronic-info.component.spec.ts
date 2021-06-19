import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChronicInfoComponent } from './form-chronic-info.component';

describe('FormChronicInfoComponent', () => {
  let component: FormChronicInfoComponent;
  let fixture: ComponentFixture<FormChronicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormChronicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChronicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
