import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSoundComponent } from './find-sound.component';

describe('FindSoundComponent', () => {
  let component: FindSoundComponent;
  let fixture: ComponentFixture<FindSoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindSoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindSoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
