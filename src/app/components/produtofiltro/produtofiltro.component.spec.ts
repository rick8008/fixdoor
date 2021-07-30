import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutofiltroComponent } from './produtofiltro.component';

describe('ProdutofiltroComponent', () => {
  let component: ProdutofiltroComponent;
  let fixture: ComponentFixture<ProdutofiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutofiltroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutofiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
