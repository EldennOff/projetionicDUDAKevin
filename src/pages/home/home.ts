import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {GuitaresListPage} from "../guitares-list/guitares-list";
import { Howl } from 'howler';

export interface Track {
  name: string;
  path: string
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

//Initialisation des musiques

export class HomePage {
playlist: Track[] = [{
  name: 'Welcome Stranger',
  path: './assets/mp3/01-WelcomeStranger.mp3'
},
  {
    name: 'Now We Ride',
    path: './assets/mp3/NowWeRide.mp3'
  },
  {
    name: 'ワールドイズマイン',
    path: './assets/mp3/07Hatsune.mp3'
  },
  {
    name: 'Call of Juarez',
    path: './assets/mp3/CallofJuarez.mp3'
  },{
    name: 'The Man With the Machine Gun',
    path: './assets/mp3/The Man With the Machine Gun.mp3'
  }
];

//Initialisation des Variables

activeTrack: Track = null;
player: Howl = null;
isPlaying = false;
progress = 0;

  constructor(public navCtrl: NavController) {

  }


  /**
   *
   * @param track
   *
   * Lancer la lecture d'une musique
   */
  start(track: Track){
    if (this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.path],
      onplay: () => {
        this.isPlaying = true;
        this.activeTrack = track;
      },
      onend: () => {

      }
    });
    this.player.play();
  }

  /**
   *
   * @param pause
   *
   * permet de mettre en pause une musique en fonction d'un boolean
   */
  togglePlayer(pause){
      this.isPlaying = !pause;
      if (pause) {
        this.player.pause();
      } else {
        this.player.play();
      }
  }

  /**
   * Passer à la musique suivante (retour à la première musique si elles sont toutes jouer)
   */
  next(){
    let index = this.playlist.indexOf(this.activeTrack);
    if (index != this.playlist.length -1){
      this.start(this.playlist[index +1]);
    } else{
      this.start(this.playlist[0]);
    }
  }

  /**
   * Musique précédente
   */
  prev(){
    let index = this.playlist.indexOf(this.activeTrack);
    if (index > 0){
      this.start(this.playlist[index -1]);
    } else{
      this.start(this.playlist[this.playlist.length - 1]);
    }
  }

}
