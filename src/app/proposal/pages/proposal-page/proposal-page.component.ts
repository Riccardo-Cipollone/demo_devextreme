import { Component, OnInit } from '@angular/core';
import { DataGridContainerComponent } from '../../components/data-grid-container/data-grid-container.component';
import { ActionButtonComponent } from '../../components/action-button/action-button.component';
import { ProposalService } from '../../services/proposal.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-proposal-page',
  standalone: true,
  imports: [DataGridContainerComponent, ActionButtonComponent, AsyncPipe],
  templateUrl: './proposal-page.component.html',
  styleUrl: './proposal-page.component.scss',
})
export class ProposalPageComponent implements OnInit {
  constructor(private proposalService: ProposalService) {}

  ngOnInit(): void {
    this.source$ = this.proposalService.source;
  }
  source$!: Observable<any[]>;
}
