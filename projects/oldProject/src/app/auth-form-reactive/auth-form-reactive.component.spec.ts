import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFormReactiveComponent } from './auth-form-reactive.component';

describe('AuthFormReactiveComponent', () => {
  let component: AuthFormReactiveComponent;
  let fixture: ComponentFixture<AuthFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
