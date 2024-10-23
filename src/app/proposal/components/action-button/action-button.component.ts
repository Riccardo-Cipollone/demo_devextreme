import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss',
})
export class ActionButtonComponent {
  @Input() helpText: string = '';
  @Input() bgColor: string = '';
  @Input() textColor: string = '#000';
}
