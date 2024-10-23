import { Routes } from '@angular/router';
import { AgendaComponent } from './features/agenda/agenda.component';
import { ProposalPageComponent } from './proposal/pages/proposal-page/proposal-page.component';

export const routes: Routes = [
  { path: 'home', component: AgendaComponent },
  { path: 'proposal', component: ProposalPageComponent },
  { path: 'contract', component: AgendaComponent },
  { path: 'personnel', component: AgendaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
