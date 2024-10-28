import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridContractComponent } from './data-grid-contract.component';

describe('DataGridContractComponent', () => {
  let component: DataGridContractComponent;
  let fixture: ComponentFixture<DataGridContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataGridContractComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataGridContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
