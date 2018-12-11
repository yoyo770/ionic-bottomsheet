import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';


import { BottomSheetItineraireComponent } from '../../pages/home/components/bottom-sheet-itineraire/bottom-sheet-itineraire';
import { BottomSheetHomeComponent } from '../../pages/home/components/bottom-sheet-home/bottom-sheet-home';
import { AnchorContentBottomSheetDirective } from './directives/anchor-content-bottomsheet';

const components = [
    BottomSheetItineraireComponent,
    BottomSheetHomeComponent,
]

@NgModule({
  declarations: [
    ...components,
    AnchorContentBottomSheetDirective
  ],
  imports: [ 
    IonicModule,
  ],
  entryComponents:[
    ...components,
  ],
  exports:[
    ...components,
    AnchorContentBottomSheetDirective
  ]
})
export class BottomSheetModule {}