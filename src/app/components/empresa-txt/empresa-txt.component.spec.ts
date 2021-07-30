import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaTxtComponent } from './empresa-txt.component';

describe('EmpresaTxtComponent', () => {
  let component: EmpresaTxtComponent;
  let fixture: ComponentFixture<EmpresaTxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaTxtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
