import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedimirComponent } from './redimir.component';

describe('RedimirComponent', () => {
  let component: RedimirComponent;
  let fixture: ComponentFixture<RedimirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedimirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedimirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
