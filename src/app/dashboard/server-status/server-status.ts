import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'ms-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.scss'
})
export class ServerStatus implements OnInit, OnDestroy {

  // currentStatus = 'online';
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private interval?: ReturnType<typeof setInterval>
  // private destroyRef = inject(DestroyRef)

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
    // console.log('ngOnInit called');
    this.interval = setInterval(() => {
      const random = Math.random();

      // if(random < 0.5) this.currentStatus = 'online';
      // else if(random < 0.9) this.currentStatus = 'offline';
      // else this.currentStatus = 'unknown';

      if(random < 0.5) this.currentStatus.set('online');
      else if(random < 0.9) this.currentStatus.set('offline');
      else this.currentStatus.set('unknown');

    }, 3000)

    // Alternative of Ondestroy
    // const interval = setInterval(() => {
    //   const random = Math.random();

    //   if(random < 0.5) this.currentStatus = 'online';
    //   else if(random < 0.9) this.currentStatus = 'offline';
    //   else this.currentStatus = 'unknown';
    // }, 3000);

    // this.destroyRef.onDestroy(() => {
    //   clearInterval(interval);
    // });
  }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit called');
  // }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
