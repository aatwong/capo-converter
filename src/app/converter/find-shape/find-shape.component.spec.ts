import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindShapeComponent } from './find-shape.component';

describe('FindShapeComponent', () => {
  let component: FindShapeComponent;
  let fixture: ComponentFixture<FindShapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindShapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
