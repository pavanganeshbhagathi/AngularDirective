import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StructuralDirectives';
  className = '';
  styleName = '';
  showInfo = false;
  caption = 'Show Text';
  mobile: string[] = ['Iphone', 'Samsung', 'OnePlus']
  studentList: any[];

  onInit() {
    this.studentList = [
      { SrlNo: 1, Name: 'Charlie', Course: 'Bsc(Hons)', Grade: 'A' },
      { SrlNo: 2, Name: 'Leslie', Course: 'BA', Grade: 'B' },
      { SrlNo: 3, Name: 'John', Course: 'Bcom', Grade: 'A' },
      { SrlNo: 4, Name: 'Jack', Course: 'Bsc-Hons', Grade: 'C' },
      { SrlNo: 5, Name: 'Shawn', Course: 'MBA', Grade: 'B' },
      { SrlNo: 6, Name: 'Shilling', Course: 'Msc', Grade: 'B' },
      { SrlNo: 7, Name: 'Tensing', Course: 'MBA', Grade: 'A' },
      { SrlNo: 8, Name: 'Bob', Course: 'MSc', Grade: 'C' },
      { SrlNo: 9, Name: 'George', Course: 'MA', Grade: 'D' },
      { SrlNo: 10, Name: 'Weasley', Course: 'B.tech', Grade: 'A' }
    ];
  }
  change(): void {
    this.className = 'success';
  }

  reset(): void {
    this.className = 'failure';
    this.styleName = '{color: "red" }';
  }

  public changeData(): void {
    this.showInfo = !this.showInfo;
    if (this.showInfo) {
      this.caption = 'Hide Text';
    } else {
      this.caption = 'Show Text';
    }
  }



}
