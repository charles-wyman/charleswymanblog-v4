import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PagesModule } from '../pages.module';

import { ArtPage } from './art.page';

const routes: Routes = [
  {
    path: '',
    component: ArtPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PagesModule
  ],
  declarations: [ArtPage]
})
export class ArtPageModule {}
