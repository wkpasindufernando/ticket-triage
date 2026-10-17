import { Component, inject, OnInit, signal } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { ticket } from '../model/ticket.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  dashboardService = inject(DashboardService);
  tickets = signal<Array<ticket>>([]);

  ngOnInit(): void {
    this.dashboardService.getTickets()
    .pipe(
      catchError((error)=>{
        console.log(error);
        throw error;
      })
    ).subscribe((tickets)=> {
      this.tickets.set(tickets);
    })
  }
}
