import { Component } from '@angular/core';
import { NewTicket } from "./new-ticket/new-ticket";
import { Ticket } from './ticket.model';
import { Control } from "../../shared/control/control";
import { TicketComponent } from './ticket/ticket';

@Component({
  selector: 'ms-support',
  imports: [NewTicket, TicketComponent],
  templateUrl: './support.html',
  styleUrl: './support.scss'
})
export class Support {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    const newTicket: Ticket = {
      id: Math.random().toString(36),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open'
    };
    this.tickets.push(newTicket);
  }

  onCloseTicket(ticketId: string) {
    this.tickets = this.tickets.map(ticket => {
      if(ticket.id === ticketId) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
