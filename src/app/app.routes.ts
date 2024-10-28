import { Routes } from '@angular/router';
import { AgendaComponent } from '../presentation/pages/agenda/agenda.component';
import { ProposalPageComponent } from '../presentation/pages/proposal/proposal-page.component';
import { ContractPageComponent } from '../presentation/pages/contract/contract-page.component';

export const routes: Routes = [
  { path: 'home', component: AgendaComponent },
  { path: 'proposal', component: ProposalPageComponent },
  { path: 'contract', component: ContractPageComponent },
  { path: 'personnel', component: AgendaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
