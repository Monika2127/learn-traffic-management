import { Component } from '@angular/core';
import { NewTicket } from "./new-ticket/new-ticket";

@Component({
  selector: 'ms-support',
  imports: [NewTicket],
  templateUrl: './support.html',
  styleUrl: './support.scss'
})
export class Support {

}
