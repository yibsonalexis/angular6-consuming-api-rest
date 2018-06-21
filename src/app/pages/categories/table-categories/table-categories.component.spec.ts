
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCategoriesComponent } from './table-categories.component';

describe('TableCategoriesComponent', () => {
  let component: TableCategoriesComponent;
  let fixture: ComponentFixture<TableCategoriesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
