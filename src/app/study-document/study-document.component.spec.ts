import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyDocumentComponent } from './study-document.component';

describe('StudyDocumentComponent', () => {
  let component: StudyDocumentComponent;
  let fixture: ComponentFixture<StudyDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
