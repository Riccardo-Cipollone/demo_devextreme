import { JsonPipe, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  gridSource: any[] = [];

  // columns: string[];

  constructor() {
    this.gridSource = [
      {
        figure: 'PEP',
        actions: [{ name: 'add', color: '#00ff00' }],
        area: [],
        hours: { tot: 40, scheduled: 0 },
        '7/10': 0,
        '14/10': 0,
        '21/10': 0,
        '28/10': 0,
        '04/11': 0,
        '11/11': 0,
        '18/11': 0,
        '25/11': 0,
        '02/12': 0,
        '09/12': 0,
        '16/12': 0,
        '23/12': 0,
      },
    ];
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
  }
}
