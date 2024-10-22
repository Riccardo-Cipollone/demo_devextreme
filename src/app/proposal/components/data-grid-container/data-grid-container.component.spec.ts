import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridContainerComponent } from './data-grid-container.component';

describe('DataGridContainerComponent', () => {
  let component: DataGridContainerComponent;
  let fixture: ComponentFixture<DataGridContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataGridContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
