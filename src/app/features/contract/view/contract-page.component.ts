import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { DxLoadPanelModule } from 'devextreme-angular';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { ActionButtonComponent } from '../../proposal/view/components/action-button/action-button.component';
import { DataGridContainerComponent } from '../../proposal/view/components/data-grid-container/data-grid-container.component';
import { QuartersToolbarComponent } from '../../proposal/view/components/quarters-toolbar/quarters-toolbar.component';
import { ContractService } from '../services/contract.service';
import { DataGridContractComponent } from "./components/data-grid-contract/data-grid-contract.component";

@Component({
  selector: 'app-contract-page',
  standalone: true,
  imports: [
    DataGridContainerComponent,
    DxLoadPanelModule,
    ActionButtonComponent,
    AsyncPipe,
    QuartersToolbarComponent,
    DataGridContractComponent
],
  templateUrl: './contract-page.component.html',
  styleUrl: './contract-page.component.scss'
})
export class ContractPageComponent {
  dataSource$: Observable<any[]> = EMPTY;

  startingDate: Date = new Date();
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
  constructor(private proposalService: ContractService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.dataSource$ = this.proposalService.source;
    this.sourceSubscription = this.dataSource$.subscribe({
      complete: () => (this.isLoading = false),
    });
  }
}
