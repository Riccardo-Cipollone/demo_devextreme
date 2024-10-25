import { Component, Input } from '@angular/core';
import { DxDataGridModule, DxTextBoxModule } from 'devextreme-angular';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { Observable, EMPTY } from 'rxjs';
import { ColoredBadgeDirective } from '../../../../proposal/view/components/colored-badge.directive';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-data-grid-contract',
  standalone: true,
  imports: [
    CommonModule,
    DxDataGridModule,
    DxTextBoxModule,
    ColoredBadgeDirective,
  ],
  templateUrl: './data-grid-contract.component.html',
  styleUrl: './data-grid-contract.component.scss'
})
export class DataGridContractComponent {
  @Input('source') gridSource$: Observable<any[]> = EMPTY;

  // loadPanelPosition: PositionConfig = { , at: 'center' };
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
  isPopupVisible: boolean = false;

  ngOnInit(): void {}

  onCellPrepared(e: DxDataGridTypes.CellPreparedEvent) {
    e.cellElement.style.textAlign = 'center';
    e.cellElement.style.verticalAlign = 'middle';
  }

  onContentReady(e: DxDataGridTypes.ContentReadyEvent) {
    e.component.option('loadPanel.enabled', false);
  }

  openModal(e: Event) {
    this.isPopupVisible = !this.isPopupVisible;
  }

  handleCloseModal(event: boolean) {
    this.isPopupVisible = event;
  }
}
