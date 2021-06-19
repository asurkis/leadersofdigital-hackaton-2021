import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLiveAddressComponent } from './form-live-address.component';

describe('FormLiveAddressComponent', () => {
  let component: FormLiveAddressComponent;
  let fixture: ComponentFixture<FormLiveAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLiveAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLiveAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
