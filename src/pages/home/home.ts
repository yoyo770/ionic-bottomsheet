import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BottomSheetProvider, ParamBottomSheet} from '../../modals/bottom-sheet/providers/bottom-sheet';
import { BottomSheetHomeComponent } from './components/bottom-sheet-home/bottom-sheet-home';
import { BottomSheetItineraireComponent } from './components/bottom-sheet-itineraire/bottom-sheet-itineraire';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public bottomSheetProvider: BottomSheetProvider,
    public navCtrl: NavController
  ) {

  }

  openModalItineraireModel1() {
    let paramBottomShet: ParamBottomSheet = {
      height: 300,
      btnClose: true,
      component: BottomSheetItineraireComponent 
    };

    this.bottomSheetProvider.openBottomSheet(paramBottomShet);
  }

  openModalItineraireModel2(){
    let paramBottomShet: ParamBottomSheet = {
      height: 300,
      btnClose: true,
      component: BottomSheetItineraireComponent 
    };

    this.bottomSheetProvider.openBottomSheet2(paramBottomShet);

  }

  openModalHomeModel1() {
    let paramBottomShet: ParamBottomSheet = {
      height: 300,
      btnClose: true,
      component: BottomSheetHomeComponent 
    };

    this.bottomSheetProvider.openBottomSheet(paramBottomShet);

    // ouvrir le 2eme modèle de bottomsheet
    //this.bottomSheetProvider.openBottomSheet2(paramBottomShet);
  }

  openModalHomeModel2(){
    let paramBottomShet: ParamBottomSheet = {
      height: 300,
      btnClose: true,
      component: BottomSheetHomeComponent 
    };

    this.bottomSheetProvider.openBottomSheet2(paramBottomShet);

  }
}
