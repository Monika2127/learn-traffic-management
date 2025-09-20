import { Component } from '@angular/core';

@Component({
  selector: 'ms-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.scss'
})
export class ServerStatus {

  currentStatus = 'online';

}
