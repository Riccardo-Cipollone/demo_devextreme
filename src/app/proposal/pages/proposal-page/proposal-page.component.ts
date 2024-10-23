import { Component, OnInit } from '@angular/core';
import { DataGridContainerComponent } from '../../components/data-grid-container/data-grid-container.component';
import { ActionButtonComponent } from '../../components/action-button/action-button.component';
import { ProposalService } from '../../services/proposal.service';
import { EMPTY, Observable, subscribeOn, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-proposal-page',
  standalone: true,
  imports: [DataGridContainerComponent, ActionButtonComponent, AsyncPipe],
  templateUrl: './proposal-page.component.html',
  styleUrl: './proposal-page.component.scss',
})
export class ProposalPageComponent implements OnInit {
  dataSource$: Observable<any[]> = EMPTY;
  isLoading: boolean = false;
  sourceSubscription!: Subscription;
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
