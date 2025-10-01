import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBindi } from './template-bindi';

describe('TemplateBindi', () => {
  let component: TemplateBindi;
  let fixture: ComponentFixture<TemplateBindi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateBindi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateBindi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
