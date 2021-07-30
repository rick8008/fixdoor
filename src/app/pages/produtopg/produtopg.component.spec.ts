import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutopgComponent } from './produtopg.component';

describe('ProdutopgComponent', () => {
  let component: ProdutopgComponent;
  let fixture: ComponentFixture<ProdutopgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutopgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutopgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
