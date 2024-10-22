import { Routes } from '@angular/router';
import { AgendaComponent } from './features/agenda/agenda.component';

export const routes: Routes = [
    { path: 'home', component: AgendaComponent },
    { path: 'proposal', component: AgendaComponent },
    { path: 'contract', component: AgendaComponent },
    { path: 'personnel', component: AgendaComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
