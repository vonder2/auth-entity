import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipochkaComponent } from './pipochka.component';

describe('PipochkaComponent', () => {
  let component: PipochkaComponent;
  let fixture: ComponentFixture<PipochkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipochkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipochkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
