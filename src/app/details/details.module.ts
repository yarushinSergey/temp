import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DetailsComponent } from './details.component';
import { MaterialModule } from '../shared/modules/material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(<Routes>[{ path: '', component: DetailsComponent }]),
    TranslateModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [DetailsComponent],
  entryComponents: [DetailsComponent],
})
export class DetailsModule { }
