import { Injectable } from '@angular/core';
import { ModalController, Modal } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

export interface ParamBottomSheet {
  height: number,
  btnClose: boolean,
  component: any
}

@Injectable()
export class BottomSheetProvider {

  private bottomSheetOpen: boolean = false;

  // contient la bottomSheet ouverte
  private bottomSheet: Modal = null;

  constructor(
    public modalCtrl: ModalController
  ) {

  }

  public openBottomSheet(paramBottomSheet: ParamBottomSheet): Observable<string> {

    if (!this.bottomSheetOpen) {

      this.createModal(paramBottomSheet, 'BottomSheetModal');

      // tant que la bottomSheet n'est pas fermé, on ne peut pas ouvrir une autre bottomSheet
      this.bottomSheetOpen = true;
    }
    return;
  }

  public openBottomSheet2(paramBottomSheet: ParamBottomSheet) {

    if (!this.bottomSheetOpen) {

      this.createModal(paramBottomSheet, 'BottomSheetModal2');

      // tant que la bottomSheet n'est pas fermé, on ne peut pas ouvrir une autre bottomSheet
      this.bottomSheetOpen = true;
    }
  }

  public closeBottomSheet() {

    // fermeture de la bottomSheet
    this.bottomSheet.dismiss();

    // la bottomSheet peut être ouverte à nouveau
    this.bottomSheetOpen = false;
  }


  // ouvre la bottomSheet
  public createModal(paramBottomSheet: ParamBottomSheet, modal: string) {

    this.bottomSheet = this.modalCtrl.create(modal, { paramBottomSheet: paramBottomSheet });
    this.bottomSheet.present();
  }

}
