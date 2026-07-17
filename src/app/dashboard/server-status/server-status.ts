import { Component } from '@angular/core';

@Component({
  selector: 'ms-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.scss'
})
export class ServerStatus {

  currentStatus = 'online';

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      const random = Math.random();

      if(random < 0.5) this.currentStatus = 'online';
      else if(random < 0.9) this.currentStatus = 'offline';
      else this.currentStatus = 'unknown';
    }, 3000)
  }

}
