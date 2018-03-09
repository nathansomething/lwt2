import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWordComponent } from './edit-word.component';

describe('WordInfoBoxComponent', () => {
  let component: EditWordComponent;
  let fixture: ComponentFixture<EditWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
