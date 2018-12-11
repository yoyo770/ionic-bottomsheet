import { Component } from '@angular/core';


@Component({
  selector: 'bottom-sheet-home',
  templateUrl: 'bottom-sheet-home.html'
})
export class BottomSheetHomeComponent {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
