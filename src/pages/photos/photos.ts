import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, normalizeURL, ToastController} from 'ionic-angular';
import { Camera, CameraOptions} from "@ionic-native/camera";


@IonicPage()
@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html',
})
export class PhotosPage {

  options: CameraOptions = {
    quality: 100,
    destinationType: this.Camera.DestinationType.DATA_URL,
    encodingType: this.Camera.EncodingType.JPEG,
    mediaType: this.Camera.MediaType.PICTURE,
    cameraDirection: 0
  };

  imageUrl: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private Camera: Camera,
    private Toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotosPage');
  }

  /**
   * Prise d'une photo avec l'appareil de l'utilisateur et l'affiche sur son écran
   */
  onPicture(){
    this.Camera.getPicture(this.options).then((data) => {
      if(data) this.imageUrl = normalizeURL(data);
    })
      .catch((err) => {
        this.Toast.create({
          message: err,
          duration:3000,
          position: 'bottom'
        }).present();
      })
  }

}
