import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDocumentComponent } from './upload-document.component';

describe('UploadDocumentComponent', () => {
  let component: UploadDocumentComponent;
  let fixture: ComponentFixture<UploadDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
