import { Component } from '@angular/core';
import { ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-ticket',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './view-ticket.component.html',
  styleUrl: './view-ticket.component.scss'
})
export class ViewTicketComponent {

}
