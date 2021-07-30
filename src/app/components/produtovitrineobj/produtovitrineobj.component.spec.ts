import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutovitrineobjComponent } from './produtovitrineobj.component';

describe('ProdutovitrineobjComponent', () => {
  let component: ProdutovitrineobjComponent;
  let fixture: ComponentFixture<ProdutovitrineobjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutovitrineobjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutovitrineobjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
