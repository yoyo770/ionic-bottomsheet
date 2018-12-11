import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BottomSheetModal2 } from './bottom-sheet2.modal';

import { BottomSheetModule } from '../../bottomsheet.module';

@NgModule({
  declarations: [
    BottomSheetModal2,
  ],
  imports: [ 
    IonicPageModule.forChild(BottomSheetModal2),
    BottomSheetModule
  ],
})
export class BottomSheet2ModalModule {}
