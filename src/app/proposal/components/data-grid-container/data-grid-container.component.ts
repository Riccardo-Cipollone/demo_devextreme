import { AsyncPipe, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DxDataGridModule, DxLoadPanelModule } from 'devextreme-angular';
import { ColoredBadgeDirective } from '../colored-badge.directive';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { Observable } from 'rxjs';
import { PositionConfig } from 'devextreme/animation/position';

@Component({
  selector: 'app-data-grid-container',
  standalone: true,
  imports: [
    DxDataGridModule,
    DxLoadPanelModule,
    AsyncPipe,
    NgStyle,
    ColoredBadgeDirective,
  ],
  templateUrl: './data-grid-container.component.html',
  styleUrl: './data-grid-container.component.scss',
})
export class DataGridContainerComponent implements OnInit {
  @Input('source') gridSource$!: Observable<any[]>;
  @Input() isLoading: boolean = false;

  // loadPanelPosition: PositionConfig = { , at: 'center' };
  selectedQuarter: string[] = [];

  ngOnInit(): void {
    this.selectedQuarter = [
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
  }

  onCellPrepared(e: DxDataGridTypes.CellPreparedEvent) {
    e.cellElement.style.textAlign = 'center';
    e.cellElement.style.verticalAlign = 'middle';
  }

  onContentReady(e: DxDataGridTypes.ContentReadyEvent) {
    e.component.option('loadPanel.enabled', false);
  }
}
