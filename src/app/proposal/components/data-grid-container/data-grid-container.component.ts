import { JsonPipe, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DxDataGridModule, DxTemplateHost } from 'devextreme-angular';
import { ColoredBadgeDirective } from '../colored-badge.directive';

@Component({
  selector: 'app-data-grid-container',
  standalone: true,
  imports: [DxDataGridModule, JsonPipe, NgStyle, ColoredBadgeDirective],
  templateUrl: './data-grid-container.component.html',
  styleUrl: './data-grid-container.component.scss',
})
export class DataGridContainerComponent implements OnInit {
  selectedQuarter: string[] = [];

  @Input('source') gridSource: any[] = [];

  // columns: string[];

  constructor() {
    // this.columns = [
    //   'Prof. figure',
    //   'Actions',
    //   'Practice /\n Discipline',
    //   'H',
    //   ...this.selectedQuarter,
    // ];
  }
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
  onCellPrepared(e: any) {
    e.cellElement.style.textAlign = 'center';
    e.cellElement.style.verticalAlign = 'middle';
  }
}
