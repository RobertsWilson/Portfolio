import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Misproyectos } from './misproyectos';

describe('Misproyectos', () => {
  let component: Misproyectos;
  let fixture: ComponentFixture<Misproyectos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Misproyectos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Misproyectos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
