import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiarrayDemoComponent } from './multiarray-demo.component';

describe('MultiarrayDemoComponent', () => {
  let component: MultiarrayDemoComponent;
  let fixture: ComponentFixture<MultiarrayDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiarrayDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiarrayDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
