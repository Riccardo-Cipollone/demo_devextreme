import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  DxDrawerModule,
  DxListModule,
  DxRadioGroupModule,
  DxToolbarModule,
} from 'devextreme-angular';
import { List, MockService } from './services/mock.service';
import { DxDrawerComponent, DxDrawerTypes } from 'devextreme-angular/ui/drawer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, DxToolbarModule, DxDrawerModule, DxListModule, DxRadioGroupModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @ViewChild(DxDrawerComponent, { static: false }) drawer!: DxDrawerComponent;

  navigation: List[];
  text: string;
  selectedOpenMode: DxDrawerTypes.OpenedStateMode = 'shrink';
  selectedPosition: DxDrawerTypes.PanelLocation = 'left';
  selectedRevealMode: DxDrawerTypes.RevealMode = 'slide';
  isDrawerOpen = true;

  constructor(private service: MockService) {
    this.text = service.getContent();
    this.navigation = service.getNavigationList();
  }

  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      stylingMode: 'text',
      onClick: () => this.isDrawerOpen = !this.isDrawerOpen,
    },
  }];
}
