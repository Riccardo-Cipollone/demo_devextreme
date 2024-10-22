import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColoredBadge]',
  standalone: true,
})
export class ColoredBadgeDirective implements OnInit {
  @Input() appColoredBadge!: string;
  @HostBinding('style.backgroundColor') bgColor: string = 'transparent';
  @HostBinding('style.padding') padding: string;
  @HostBinding('style.whiteSpace') whiteSpace: string;
  @HostBinding('style.color') textColor: string;
  @HostBinding('style.borderRadius') radius: string;

  constructor() {
    this.padding = '8px 16px';
    this.textColor = '#fff';
    this.radius = '12px';
    this.whiteSpace = 'pre-line';
  }

  ngOnInit(): void {
    this.bgColor = this.appColoredBadge;
  }
}
