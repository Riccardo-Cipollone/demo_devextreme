import { AsyncPipe, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  DxDataGridModule,
  DxPopupModule,
  DxSelectBoxModule,
  DxTextBoxModule,
} from 'devextreme-angular';
import { ColoredBadgeDirective } from '../../directives/colored-badge.directive';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { EMPTY, Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ResourcesModalComponent } from '../resources-modal/resources-modal.component';

@Component({
  selector: 'app-data-grid-container',
  standalone: true,
  imports: [
    DxDataGridModule,
    DxTextBoxModule,
    AsyncPipe,
    NgStyle,
    ColoredBadgeDirective,
    DxSelectBoxModule,
    DxPopupModule,
    FormsModule,
    ResourcesModalComponent,
  ],
  templateUrl: './data-grid-container.component.html',
  styleUrl: './data-grid-container.component.scss',
})
export class DataGridContainerComponent implements OnInit {
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
