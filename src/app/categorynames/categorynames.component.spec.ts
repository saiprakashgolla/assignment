import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorynamesComponent } from './categorynames.component';

describe('CategorynamesComponent', () => {
  let component: CategorynamesComponent;
  let fixture: ComponentFixture<CategorynamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorynamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorynamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
