import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[msButton]',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input({ required: true }) label!: string;
}
