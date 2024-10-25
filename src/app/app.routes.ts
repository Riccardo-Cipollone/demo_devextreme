import { Routes } from '@angular/router';
import { AgendaComponent } from './features/agenda/agenda.component';
import { ProposalPageComponent } from './features/proposal/view/proposal-page.component';
import { ContractPageComponent } from './features/contract/services/contract/contract.component';

export const routes: Routes = [
  { path: 'home', component: AgendaComponent },
  { path: 'proposal', component: ProposalPageComponent },
  { path: 'contract', component: ContractPageComponent },
  { path: 'personnel', component: AgendaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
