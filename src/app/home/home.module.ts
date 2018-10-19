import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../shared/modules/material.module';
import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(<Routes>[{ path: '', component: HomeComponent }]),
    TranslateModule
  ],
  exports: [],
  declarations: [HomeComponent],
  entryComponents: [HomeComponent]
})
export class HomeModule { }
