import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LEFIVEComponent } from './le-five.component';

describe('LEFIVEComponent', () => {
  let component: LEFIVEComponent;
  let fixture: ComponentFixture<LEFIVEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LEFIVEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LEFIVEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
