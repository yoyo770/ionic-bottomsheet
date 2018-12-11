import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  @ViewChild('input') input;

  constructor(
    public keyboard:Keyboard,
    public navCtrl: NavController, public navParams: NavParams) {
     
  }

  ionViewDidEnter() {

    setTimeout(() => {
      this.input.setFocus();
    },150);

 }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
