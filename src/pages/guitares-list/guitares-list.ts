import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GuitareNewPage} from "./guitare-new/guitare-new";
import {GuitarePage} from "./guitare/guitare";
import {GuitareProvider} from "../../providers/guitare/guitare";
import {Subscription} from "rxjs";

@IonicPage()
@Component({
  selector: 'page-guitares-list',
  templateUrl: 'guitares-list.html',
})
export class GuitaresListPage implements OnInit{

  public guitares: any = [];
  guitareSubscription: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private Guitare: GuitareProvider) {
  }

  ngOnInit(){
    this.guitareSubscription = this.Guitare.guitareSubject.subscribe((listGuitare) => {
      console.log(listGuitare)
      this.guitares= listGuitare;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsListPage');
  }

  /**
   * Navigation vers la page de création d'une guitare
   */
  onGoToCreate(){
    this.navCtrl.push(GuitareNewPage);
  }

  /**
   *
   * @param guitareTitle
   * @param _id
   *
   * Navigation vers la page détail d'une guitare
   */
  onGoToGuitare(guitareTitle: string, _id: number){
    this.navCtrl.push(GuitarePage, {title: guitareTitle, id: _id});
  }

}
