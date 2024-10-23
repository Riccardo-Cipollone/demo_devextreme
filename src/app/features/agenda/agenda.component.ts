import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { MockService, PlanningData } from '../../services/mock.service';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, DxDataGridModule, DxButtonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {
  planningData: PlanningData[] = [];
  // columns = ['Type', 'Notification', 'Name', 'Start Date', 'End Date', 'Planning Status', 'Actions'];

  constructor(private service: MockService) {
    this.planningData = service.getPlanningData();
  }
}
