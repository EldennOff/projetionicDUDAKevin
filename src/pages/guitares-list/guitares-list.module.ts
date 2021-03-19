import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuitaresListPage } from './guitares-list';

@NgModule({
  declarations: [
    GuitaresListPage,
  ],
  imports: [
    IonicPageModule.forChild(GuitaresListPage),
  ],
})
export class GuitaresListPageModule {}
