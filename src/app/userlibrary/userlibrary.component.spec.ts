import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlibraryComponent } from './userlibrary.component';

describe('UserlibraryComponent', () => {
  let component: UserlibraryComponent;
  let fixture: ComponentFixture<UserlibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
