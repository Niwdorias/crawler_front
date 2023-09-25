import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUrlSearchComponent } from './new-url-search.component';

describe('NewUrlSearchComponent', () => {
  let component: NewUrlSearchComponent;
  let fixture: ComponentFixture<NewUrlSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewUrlSearchComponent]
    });
    fixture = TestBed.createComponent(NewUrlSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
