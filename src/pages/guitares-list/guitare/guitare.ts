import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {GuitareProvider} from "../../../providers/guitare/guitare";

@IonicPage()
@Component({
  selector: 'page-guitare',
  templateUrl: 'guitare.html',
})
export class GuitarePage implements OnInit {

  public modif: boolean = false;
  public title: string;
  public id: number;
  public guitare:any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController,
    private Guitare: GuitareProvider,
    private Toast: ToastController
  ) {}

  /**
   * Initialisation de la guitare selectionné
   */
  ngOnInit(){
    this.title = this.navParams.get('title');
    this.id = this.navParams.get('id');
    this.guitare = this.Guitare.getGuitareById(this.id);
    console.log(this.guitare);
  }

  /**
   * Permission d'accéder à la page de modification de la guitare selectionné
   */
  onGoAccessModif(){
    let alert = this.alertCtrl.create({
      title: 'Etes-vous sur de vouloir modifier ?',
      subTitle: 'Vous rendrez possible la modification',
      buttons: [
        {
          text: 'Annuler',
          role: 'Cancel'
        },
        {
          text: 'Confirmer',
          handler: () => this.modif = !this.modif
        }
      ]
    });

    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmPage');
  }

  /**
   * Message d'alerte pour savoir que la guitare a bien été modifié
   */
  onModif(){
    this.Guitare.update(this.guitare.data, this.guitare.id).subscribe(() => {
      const toast = this.Toast.create({
        message: 'Vos changements ont été sauvegardées',
        duration: 2000
      }).present();
      this.modif = false;
    })
  }

  /**
   * Suppression d'une guitare selectionné
   */
  onDelete(){
    this.Guitare.delete(this.guitare.id);
    this.navCtrl.pop();
  }

}
