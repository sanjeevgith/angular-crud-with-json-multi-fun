import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpformviewComponent } from './empformview.component';

describe('EmpformviewComponent', () => {
  let component: EmpformviewComponent;
  let fixture: ComponentFixture<EmpformviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpformviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpformviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
