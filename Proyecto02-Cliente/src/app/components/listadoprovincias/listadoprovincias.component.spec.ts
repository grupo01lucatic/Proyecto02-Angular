import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoprovinciasComponent } from './listadoprovincias.component';

describe('ListadoprovinciasComponent', () => {
  let component: ListadoprovinciasComponent;
  let fixture: ComponentFixture<ListadoprovinciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoprovinciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoprovinciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
