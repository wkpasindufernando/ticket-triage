import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home.component').then((m) => m.HomeComponent);
        }
    },
    {
        path:'createTicket',
        loadComponent: () => {
            return import('./create-ticket/create-ticket.component').then((m) => m.CreateTicketComponent);
        }
    
    },
    {
        path:'noTicketFound',
        loadComponent: () => {
            return import('./no-ticket-found/no-ticket-found.component').then((m) => m.NoTicketFoundComponent);
        }
    
    },
    {
        path:'viewTicket',
        loadComponent: () => {
            return import('./view-ticket/view-ticket.component').then((m) => m.ViewTicketComponent);
        }
    
    }
];
