import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProvierComponent } from './list-provier.component';

describe('ListProvierComponent', () => {
  let component: ListProvierComponent;
  let fixture: ComponentFixture<ListProvierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProvierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProvierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
