import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartersToolbarComponent } from './quarters-toolbar.component';

describe('QuartersToolbarComponent', () => {
  let component: QuartersToolbarComponent;
  let fixture: ComponentFixture<QuartersToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuartersToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuartersToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
