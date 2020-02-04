import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableObjComponent } from './table-obj.component';

describe('TableObjComponent', () => {
  let component: TableObjComponent;
  let fixture: ComponentFixture<TableObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
