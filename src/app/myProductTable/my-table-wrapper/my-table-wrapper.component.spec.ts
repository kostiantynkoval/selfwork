import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTableWrapperComponent } from './my-table-wrapper.component';

describe('MyTableWrapperComponent', () => {
  let component: MyTableWrapperComponent;
  let fixture: ComponentFixture<MyTableWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTableWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
