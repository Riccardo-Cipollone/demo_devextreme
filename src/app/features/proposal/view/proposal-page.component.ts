import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { DxLoadPanelModule } from 'devextreme-angular';
import { DataGridContainerComponent } from './components/data-grid-container/data-grid-container.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { ProposalService } from '../services/proposal.service';

@Component({
  selector: 'app-proposal-page',
  standalone: true,
  imports: [
    DataGridContainerComponent,
    DxLoadPanelModule,
    ActionButtonComponent,
    AsyncPipe,
  ],
  templateUrl: './proposal-page.component.html',
  styleUrl: './proposal-page.component.scss',
})
export class ProposalPageComponent implements OnInit {
  dataSource$: Observable<any[]> = EMPTY;
  isLoading: boolean = false;
  sourceSubscription!: Subscription;
  selectedQuarter: string[] = [
    '7/10',
    '14/10',
    '21/10',
    '28/10',
    '04/11',
    '11/11',
    '18/11',
    '25/11',
    '02/12',
    '09/12',
    '16/12',
    '23/12',
  ];
  constructor(private proposalService: ProposalService) {}

  ngOnInit(): void {
    // this.dataSource$ = this.proposalService.source;
    this.isLoading = true;
    this.dataSource$ = this.proposalService.source;
    this.sourceSubscription = this.dataSource$.subscribe({
      complete: () => (this.isLoading = false),
    });
  }
}
