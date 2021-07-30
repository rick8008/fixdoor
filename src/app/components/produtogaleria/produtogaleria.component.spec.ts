import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutogaleriaComponent } from './produtogaleria.component';

describe('ProdutogaleriaComponent', () => {
  let component: ProdutogaleriaComponent;
  let fixture: ComponentFixture<ProdutogaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutogaleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutogaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
