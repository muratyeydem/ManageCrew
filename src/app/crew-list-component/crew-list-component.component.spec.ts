import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewListComponentComponent } from './crew-list-component.component';

describe('CrewListComponentComponent', () => {
  let component: CrewListComponentComponent;
  let fixture: ComponentFixture<CrewListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrewListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
