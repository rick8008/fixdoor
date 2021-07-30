import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorelacionadoComponent } from './produtorelacionado.component';

describe('ProdutorelacionadoComponent', () => {
  let component: ProdutorelacionadoComponent;
  let fixture: ComponentFixture<ProdutorelacionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutorelacionadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutorelacionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
