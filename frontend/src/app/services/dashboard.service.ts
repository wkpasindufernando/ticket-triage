import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ticket } from '../model/ticket.type';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  http = inject(HttpClient);
  getTickets() {
    const url = '';
    return this.http.get<Array<ticket>>(url);
  }
  constructor() { }
}
