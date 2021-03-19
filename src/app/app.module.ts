import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {GuitaresListPageModule} from "../pages/guitares-list/guitares-list.module";
import {AboutPageModule} from "../pages/about/about.module";
import {TabPageModule} from "../pages/tab/tab.module";
import {GuitareNewPageModule} from "../pages/guitares-list/guitare-new/guitare-new.module";
import {GuitarePageModule} from "../pages/guitares-list/guitare/guitare.module";
import { GuitareProvider } from '../providers/guitare/guitare';

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { Camera } from "@ionic-native/camera";
import {PhotosPageModule} from "../pages/photos/photos.module";

const firebase = {
  apiKey: "AIzaSyA6aP4Ervaurorrjz2OERSXxuMFjr1npYI",
  authDomain: "techvmduda.firebaseapp.com",
  projectId: "techvmduda",
  storageBucket: "techvmduda.appspot.com",
  messagingSenderId: "440349292079",
  appId: "1:440349292079:web:04095fbaccd39bd2edf8da"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    GuitaresListPageModule,
    AboutPageModule,
    TabPageModule,
    GuitareNewPageModule,
    GuitarePageModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    PhotosPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GuitareProvider,
    Camera
  ]
})
export class AppModule {}
