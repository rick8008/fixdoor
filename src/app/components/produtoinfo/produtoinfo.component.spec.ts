import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoinfoComponent } from './produtoinfo.component';

describe('ProdutoinfoComponent', () => {
  let component: ProdutoinfoComponent;
  let fixture: ComponentFixture<ProdutoinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
