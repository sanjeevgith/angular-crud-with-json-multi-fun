import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpformpageComponent } from './empformpage.component';

describe('EmpformpageComponent', () => {
  let component: EmpformpageComponent;
  let fixture: ComponentFixture<EmpformpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpformpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpformpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
