import { Directive, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[anchor-content-bottomsheet]' // Attribute selector
})
export class AnchorContentBottomSheetDirective {

  constructor( public viewContainerRef: ViewContainerRef,) {
  }

}
