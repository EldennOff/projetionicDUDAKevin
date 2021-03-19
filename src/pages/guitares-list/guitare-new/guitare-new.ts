import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GuitareProvider} from "../../../providers/guitare/guitare";

@IonicPage()
@Component({
  selector: 'page-guitare-new',
  templateUrl: 'guitare-new.html',
})
export class GuitareNewPage {

  /**
   * mise en place de la création d'une guitare
   */
  public guitare: any = {
    nom: null,
    marque: null,
    prix: null,
    picture:null,
    onsell: null,
    detail: null
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private Guitare: GuitareProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuitareNewPage');
  }

  /**
   * Ajout d'une guitare à la base de donnée
   */
  onAdd(){
    this.Guitare.saveNewGuitare(this.guitare).subscribe(() => {
      this.guitare = {
        nom: null,
        marque: null,
        prix: null,
        picture:null,
        onsell: null,
        detail: null
      };
      this.navCtrl.pop();
    });
  }

}
