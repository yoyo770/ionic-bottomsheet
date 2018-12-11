import { Component, ViewChild, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParamBottomSheet, BottomSheetProvider } from '../../providers/bottom-sheet';
import { AnchorContentBottomSheetDirective } from '../../directives/anchor-content-bottomsheet';

@IonicPage()
@Component({
  selector: 'bottom-sheet-modal2',
  templateUrl: 'bottom-sheet2.modal.html',
})
export class BottomSheetModal2 {


  private paramBottomSheet: ParamBottomSheet;
  @ViewChild(AnchorContentBottomSheetDirective) anchorFactory: AnchorContentBottomSheetDirective;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private bottomSheetProvider: BottomSheetProvider,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    // param de la bottomsheet
    this.paramBottomSheet = navParams.get('paramBottomSheet');
  }

  ngOnInit() {

    let factory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(this.paramBottomSheet.component);
    this.anchorFactory.viewContainerRef.createComponent(factory).instance;
  }

  closeBottomSheet() {
    this.bottomSheetProvider.closeBottomSheet()
  }
  
}
