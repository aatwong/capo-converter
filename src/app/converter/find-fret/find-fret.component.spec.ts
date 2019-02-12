import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FindFretComponent } from './find-fret.component';

describe('FindFretComponent', () => {
  let component: FindFretComponent;
  let fixture: ComponentFixture<FindFretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindFretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
