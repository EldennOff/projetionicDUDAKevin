import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuitarePage } from './guitare';

@NgModule({
  declarations: [
    GuitarePage,
  ],
  imports: [
    IonicPageModule.forChild(GuitarePage),
  ],
})
export class GuitarePageModule {}
