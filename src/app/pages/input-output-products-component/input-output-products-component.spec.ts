import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputProductsComponent } from './input-output-products-component';

describe('InputOutputProductsComponent', () => {
  let component: InputOutputProductsComponent;
  let fixture: ComponentFixture<InputOutputProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOutputProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
