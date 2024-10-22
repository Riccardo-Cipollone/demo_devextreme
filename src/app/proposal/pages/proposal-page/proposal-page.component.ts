import { Component } from '@angular/core';
import { DataGridContainerComponent } from '../../components/data-grid-container/data-grid-container.component';

@Component({
  selector: 'app-proposal-page',
  standalone: true,
  imports: [DataGridContainerComponent],
  templateUrl: './proposal-page.component.html',
  styleUrl: './proposal-page.component.scss',
})
export class ProposalPageComponent {}
