import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvvComponent } from './mvv.component';

describe('MvvComponent', () => {
  let component: MvvComponent;
  let fixture: ComponentFixture<MvvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
