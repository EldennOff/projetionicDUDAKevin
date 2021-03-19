import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuitareNewPage } from './guitare-new';

@NgModule({
  declarations: [
    GuitareNewPage,
  ],
  imports: [
    IonicPageModule.forChild(GuitareNewPage),
  ],
})
export class GuitareNewPageModule {}
