import { Component, input, Input } from '@angular/core';
import { Image } from '../../types/image.interface';

@Component({
  selector: 'ms-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.html',
  styleUrl: './dashboard-item.scss'
})
export class DashboardItem {

  @Input({ required: true }) title!: string;
  @Input({ required: true }) image!: Image;

  // image = input.required<Image>();
  // title = input.required<string>();
}
