import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplecrouselComponent } from './samplecrousel.component';

describe('SamplecrouselComponent', () => {
  let component: SamplecrouselComponent;
  let fixture: ComponentFixture<SamplecrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplecrouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplecrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
