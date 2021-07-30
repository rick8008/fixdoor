import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaboxComponent } from './noticiabox.component';

describe('NoticiaboxComponent', () => {
  let component: NoticiaboxComponent;
  let fixture: ComponentFixture<NoticiaboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
