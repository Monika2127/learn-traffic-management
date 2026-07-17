import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ms-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.scss',
  encapsulation: ViewEncapsulation.None,      // Use None to allow global styles to affect this component
  host: {
    class: 'control',           //  wherever there is ms-control, it will add the class='control' to that element(host/calling component)
    '(click)': 'onClick()'
  }
})

export class Control {
  // @HostBinding('class') className = 'control';    // it will do the same thing as line no 9-11
  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // }
  private el = inject(ElementRef);

  label = input.required<string>();

  onClick() {
    console.log('clicked');
    console.log(this.el)
    console.log(this.el.nativeElement)
  }
}
