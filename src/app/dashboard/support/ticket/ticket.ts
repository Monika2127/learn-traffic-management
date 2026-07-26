import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'ms-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.scss'
})
export class TicketComponent {

  ticketData = input.required<Ticket>();
  closeTicket = output<string>();

  detailsVisible = signal(false);

  onToggleVisible() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update(value => !value);
  }

  onMarkAsCompleted() {
    this.closeTicket.emit(this.ticketData().id);
    // Logic to mark the ticket as completed
  }

}
