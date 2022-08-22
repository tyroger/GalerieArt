import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeinturesComponent } from './peintures.component';

describe('PeinturesComponent', () => {
  let component: PeinturesComponent;
  let fixture: ComponentFixture<PeinturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeinturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeinturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
