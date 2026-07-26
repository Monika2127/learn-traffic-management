import { Component, ElementRef, output, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Button } from "../../../shared/button/button";
import { Control } from "../../../shared/control/control";

@Component({
  selector: 'ms-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.scss'
})
export class NewTicket {

  // @ViewChild('form') formValue?: ElementRef<HTMLFormElement>;
  private formValSig = viewChild.required<ElementRef<HTMLFormElement>>('form'); // required added for form template to be defined guranteedly
  add = output<{ title: string; text: string }>();

  onSubmit(title: string, text: string) {
   this.add.emit({ title, text });
    // this.formValue?.nativeElement.reset();
    this.formValSig().nativeElement.reset();
  }
}
