import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { Customer, MockService } from '../../services/mock.service';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, DxDataGridModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {
  customers: Customer[];
  columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];

  constructor(private service: MockService) {
    this.customers = service.getCustomers();
  }
}
