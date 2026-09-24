import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Featuredproducts } from './featuredproducts';

describe('Featuredproducts', () => {
  let component: Featuredproducts;
  let fixture: ComponentFixture<Featuredproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Featuredproducts],
    }).compileComponents();

    fixture = TestBed.createComponent(Featuredproducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
