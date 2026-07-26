import { afterEveryRender, afterNextRender, Component, contentChild, ContentChild, ContentChildren, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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

  @ContentChild('inputMS') private inputElement?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  // @ContentChildren('inputMS') private inputElements?: ElementRef<HTMLInputElement | HTMLTextAreaElement>[];

  private inputElementSig = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('inputMS');

  constructor() {
    // afterEveryRender(() => {
    //   console.log('After every render');
    // })

    // afterNextRender(() => {
    //   console.log('After next render');
    // });
  }

  onClick() {
    console.log('clicked');
    // console.log(this.el.nativeElement)
    // console.dir(this.inputElement?.nativeElement)
    // console.dir(this.inputElements)
    // this.inputElements?.forEach(input => {
    //   console.dir(input.nativeElement)
    // });
    console.log(this.inputElementSig().nativeElement)
  }
}
