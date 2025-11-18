import { ComponentFixture, TestBed } from '@angular/core/testing';

import { oferts } from './oferts';

describe('Oferts', () => {
  let component: oferts;
  let fixture: ComponentFixture<oferts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [oferts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(oferts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
