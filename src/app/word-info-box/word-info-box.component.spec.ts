import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordInfoBoxComponent } from './word-info-box.component';

describe('WordInfoBoxComponent', () => {
  let component: WordInfoBoxComponent;
  let fixture: ComponentFixture<WordInfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordInfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
