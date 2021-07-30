import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutovitrineComponent } from './produtovitrine.component';

describe('ProdutovitrineComponent', () => {
  let component: ProdutovitrineComponent;
  let fixture: ComponentFixture<ProdutovitrineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutovitrineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutovitrineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
