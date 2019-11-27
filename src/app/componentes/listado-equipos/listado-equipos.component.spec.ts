import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEquiposComponent } from './listado-equipos.component';

describe('ListadoEquiposComponent', () => {
  let component: ListadoEquiposComponent;
  let fixture: ComponentFixture<ListadoEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
