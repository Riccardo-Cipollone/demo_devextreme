import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  DxAutocompleteModule,
  DxButtonModule,
  DxDataGridModule,
  DxPopupModule,
  DxSelectBoxModule,
} from 'devextreme-angular';
import { MockService, PlanningData } from './services/mock.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [
    CommonModule,
    DxDataGridModule,
    DxButtonModule,
    DxPopupModule,
    DxSelectBoxModule,
    FormsModule,
    DxAutocompleteModule,
  ],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss',
})
export class AgendaComponent {
  planningData: PlanningData[] = [];
  firstName: string = '';
  names: string[] = data.names.map((name) => name.toUpperCase());

  constructor(private service: MockService) {
    this.planningData = service.getPlanningData();
  }

  updateEmployeeInfo($event: any) {
    let result = '';
    result += `${this.firstName || ''}`.trim();
  }
}

export interface Data {
  names: string[];
  surnames: string[];
  positions: string[];
}

const data: Data = {
  names: [
    'James',
    'John',
    'Robert',
    'Michael',
    'William',
    'David',
    'Richard',
    'Charles',
    'Joseph',
    'Thomas',
    'Christopher',
    'Daniel',
    'Paul',
    'Mark',
    'Donald',
    'George',
    'Kenneth',
    'Steven',
    'Edward',
    'Brian',
    'Ronald',
    'Anthony',
    'Kevin',
    'Jason',
    'Jeff',
    'Mary',
    'Patricia',
    'Linda',
    'Barbara',
    'Elizabeth',
    'Jennifer',
    'Maria',
    'Susan',
    'Margaret',
    'Dorothy',
    'Lisa',
    'Nancy',
    'Karen',
    'Betty',
    'Helen',
    'Sandra',
    'Donna',
    'Carol',
    'Ruth',
    'Sharon',
    'Michelle',
    'Laura',
    'Sarah',
    'Kimberly',
    'Deborah',
  ],
  surnames: [
    'Anderson',
    'Smith',
    'Johnson',
    'Williams',
    'Jones',
    'Brown',
    'Davis',
    'Miller',
    'Wilson',
    'Moore',
    'Taylor',
    'Thomas',
    'Jackson',
    'White',
    'Harris',
    'Martin',
    'Thompson',
    'Garcia',
    'Martinez',
    'Robinson',
    'Clark',
    'Rodriguez',
    'Lewis',
    'Lee',
    'Walker',
    'Hall',
    'Allen',
    'Young',
    'Hernandez',
    'King',
    'Wright',
    'Lopez',
    'Hill',
    'Scott',
    'Green',
    'Adams',
    'Baker',
    'Gonzalez',
    'Nelson',
    'Carter',
    'Mitchell',
    'Perez',
    'Roberts',
    'Turner',
    'Phillips',
    'Campbell',
    'Parker',
    'Evans',
    'Edwards',
    'Collins',
  ],
  positions: [
    'CEO',
    'COO',
    'CTO',
    'CMO',
    'HR Manager',
    'IT Manager',
    'Controller',
    'Sales Manager',
    'Support Manager',
  ],
};
