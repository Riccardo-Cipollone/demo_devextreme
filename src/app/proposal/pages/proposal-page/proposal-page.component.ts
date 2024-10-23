import { Component } from '@angular/core';
import { DataGridContainerComponent } from '../../components/data-grid-container/data-grid-container.component';
import { ActionButtonComponent } from '../../components/action-button/action-button.component';

@Component({
  selector: 'app-proposal-page',
  standalone: true,
  imports: [DataGridContainerComponent, ActionButtonComponent],
  templateUrl: './proposal-page.component.html',
  styleUrl: './proposal-page.component.scss',
})
export class ProposalPageComponent {}
