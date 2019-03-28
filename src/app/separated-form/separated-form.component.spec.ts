import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatedFormComponent } from './separated-form.component';

describe('SeparatedFormComponent', () => {
  let component: SeparatedFormComponent;
  let fixture: ComponentFixture<SeparatedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparatedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparatedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
