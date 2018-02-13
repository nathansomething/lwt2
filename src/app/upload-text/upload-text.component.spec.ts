import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTextComponent } from './upload-text.component';

describe('UploadTextComponent', () => {
  let component: UploadTextComponent;
  let fixture: ComponentFixture<UploadTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
