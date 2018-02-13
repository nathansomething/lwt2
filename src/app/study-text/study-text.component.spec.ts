import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyTextComponent } from './study-text.component';

describe('StudyTextComponent', () => {
  let component: StudyTextComponent;
  let fixture: ComponentFixture<StudyTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
