import { Component } from '@angular/core';
import { Header } from './header/header';
import { ServerStatus } from './dashboard/server-status/server-status';
import { Traffic } from './dashboard/traffic/traffic';
import { Support } from './dashboard/support/support';
import { DashboardItem } from './dashboard/dashboard-item/dashboard-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    Header,
    ServerStatus,
    Traffic,
    Support,
    DashboardItem
  ],
})
export class AppComponent {
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
  currentStatus = 'online';
}
