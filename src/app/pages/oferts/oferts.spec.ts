import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oferts } from './oferts';

describe('Oferts', () => {
  let component: Oferts;
  let fixture: ComponentFixture<Oferts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oferts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oferts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
