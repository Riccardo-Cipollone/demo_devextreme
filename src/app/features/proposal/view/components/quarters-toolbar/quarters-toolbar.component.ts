import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quarters-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './quarters-toolbar.component.html',
  styleUrl: './quarters-toolbar.component.scss',
})
export class QuartersToolbarComponent implements OnInit {
  @Input() startingDate!: Date;

  currentQuarter!: number;
  currentYear!: number;
  quartersToShow: string[] = [];

  ngOnInit(): void {
    this.currentYear = this.startingDate.getFullYear();
    this.currentQuarter = this.getQuarter(this.startingDate);

    this.generateQuarters();
  }

  getQuarter(date: Date): number {
    const month = date.getMonth() + 1;
    return Math.ceil(month / 3);
  }

  generateQuarters(): void {
    this.quartersToShow = [];
    let startYear = this.currentYear;
    let startQuarter = this.currentQuarter - 3;

    if (startQuarter <= 0) {
      startQuarter += 4;
      startYear -= 1;
    }

    for (let i = 0; i < 8; i++) {
      const quarterLabel = `Q${startQuarter}/${startYear.toString().slice(-2)}`;
      this.quartersToShow.push(quarterLabel);

      startQuarter++;
      if (startQuarter > 4) {
        startQuarter = 1;
        startYear++;
      }
    }
  }

  goToPreviousQuarter(): void {
    this.currentQuarter--;
    if (this.currentQuarter < 1) {
      this.currentQuarter = 4;
      this.currentYear--;
    }
    this.generateQuarters();
  }

  goToNextQuarter(): void {
    this.currentQuarter++;
    if (this.currentQuarter > 4) {
      this.currentQuarter = 1;
      this.currentYear++;
    }
    this.generateQuarters();
  }
}
