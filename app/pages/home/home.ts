import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Fabric} from '../../providers/fabric/fabric';
declare const proximiio;

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [Fabric]
})
export class HomePage {
    constructor(private navCtrl: NavController, public _fabric: Fabric) {}
    addRectactgle() {
    	this._fabric.addRect();
    }
  	ionViewDidEnter() {
  		this._fabric.didEnter();
  	}
  	addImage() {
  		this._fabric.addImage();
  	}
}
