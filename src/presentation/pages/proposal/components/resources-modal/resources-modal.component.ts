import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DxSelectBoxModule, DxPopupModule } from 'devextreme-angular';

@Component({
  selector: 'app-resources-modal',
  standalone: true,
  imports: [
    DxSelectBoxModule,
    DxPopupModule,
    FormsModule
  ],
  templateUrl: './resources-modal.component.html',
  styleUrl: './resources-modal.component.scss'
})
export class ResourcesModalComponent {

  // DIALOG PACKAGE
  @Input() isPopupVisible: boolean = false;
  @Output() closeModalEmitter = new EventEmitter<boolean>();
  backButtonOptions: any;
  forwardButtonOptions: any;
  resourceType: string = "";
  stepCounter: number = 0;
  // Mock Data
  resourceTypeOptions: string[] = ['Professional figure', 'Practice / Discipline'];
  professionOptions: string[] = ['Jr Engineer', 'Sr Engineer'];
  countryOptions: string[] = ['Italy', 'Germany'];
  groupOptions: string[] = ['Civil Engineering', 'SW Engineering'];
  subGroupOptions: string[] = ['BIM', 'Indstruy 5.0', 'Con. Safety'];

  ngOnInit(): void {
    this.initModalData();
  }

  openModal(e: Event) {
    // alert('Choosing Pratice/Discipline...');
    this.isPopupVisible = !this.isPopupVisible;
  }


  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
  }

  test(event: any) {
    console.log(event)
    this.closeModalEmitter.emit(false);
  }

  handleForwardAction() {
    if (this.resourceType === this.resourceTypeOptions[0] && this.stepCounter === 1) {
      this.closeModalEmitter.emit(false);
      this.initModalData();
      window.alert("Resource management work in progress!");
    } else if (this.resourceType === this.resourceTypeOptions[1] && this.stepCounter === 1) {
      this.stepCounter++;
    } else if (this.resourceType === this.resourceTypeOptions[1] && this.stepCounter === 2) {
      this.closeModalEmitter.emit(false);
      this.initModalData();
      window.alert("Resource management work in progress!");
    } else {
      this.stepCounter++;
    }
    this.backButtonOptions = { ...this.backButtonOptions, text: this.stepCounter > 0 ? 'Back' : 'Close' };
    this.forwardButtonOptions = this.handleButtonLabel();
  }

  handleBackAction() {
    if (this.stepCounter === 0) {
      this.closeModalEmitter.emit(false);
      this.initModalData();
    } else {
      this.stepCounter--;
      this.backButtonOptions = { ...this.backButtonOptions, text: this.stepCounter > 0 ? 'Back' : 'Close' };
      this.forwardButtonOptions = this.handleButtonLabel();
    }
  }

  handleButtonLabel() {
    let text = "";
    if (this.stepCounter === 0 || (this.resourceType === this.resourceTypeOptions[1] && this.stepCounter === 0)) {
      text = 'Next';
    } else if (this.stepCounter === 1 && (this.resourceType === this.resourceTypeOptions[0])) {
      text = 'Insert';
    } else if (this.stepCounter === 2 && this.resourceType === this.resourceTypeOptions[1]) {
      text = 'Insert';
    } else {
      text = 'Next'
    }
    return { ...this.forwardButtonOptions, text };
  }

  initModalData() {
    this.backButtonOptions = {
      text: "Close",
      stylingMode: 'outlined',
      type: 'normal',
      onClick: () => {
        this.handleBackAction();
      },
    };

    this.forwardButtonOptions = {
      text: "Next",
      stylingMode: 'contained',
      type: 'default',
      onClick: () => {
        this.handleForwardAction();
      },
    };

    this.stepCounter = 0;
    this.resourceType = "";
  }
}
