import { Component, Output, EventEmitter } from '@angular/core';
import { BottomSheetProvider } from '../../../../modals/bottom-sheet/providers/bottom-sheet';


@Component({
  selector: 'bottom-sheet-itineraire',
  templateUrl: 'bottom-sheet-itineraire.html'
})
export class BottomSheetItineraireComponent {

  text: string;

  @Output() test2: EventEmitter<string> = new EventEmitter();

  constructor(  public bottomSheetProvider: BottomSheetProvider,) {
    console.log('Hello BottomSheetItineraireComponent Component');
    this.text = 'Hello World';
  }
 test(){
 alert()
 }
}
