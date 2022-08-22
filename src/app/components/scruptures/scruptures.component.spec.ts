import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrupturesComponent } from './scruptures.component';

describe('ScrupturesComponent', () => {
  let component: ScrupturesComponent;
  let fixture: ComponentFixture<ScrupturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrupturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrupturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
