import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPage } from './tab';
import {HomePage} from "../home/home";
import {GuitaresListPage} from "../guitares-list/guitares-list";
import {AboutPage} from "../about/about";

@NgModule({
  declarations: [
    TabPage,
  ],
  imports: [
    IonicPageModule.forChild(TabPage),
  ],
})
export class TabPageModule {}
