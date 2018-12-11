import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BottomSheetModal } from './bottom-sheet.modal';

import { BottomSheetModule } from '../../bottomsheet.module';

@NgModule({
  declarations: [
    BottomSheetModal,
    
  ],
  imports: [ 
    IonicPageModule.forChild(BottomSheetModal),
    BottomSheetModule
  ],
})
export class BottomSheetModalodule {}
