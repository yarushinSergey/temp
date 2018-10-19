import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FavouriteBooksComponent } from './favourite-books.component';
import { MaterialModule } from '../shared/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(<Routes>[{ path: '', component: FavouriteBooksComponent }]),
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [FavouriteBooksComponent],
  entryComponents: [FavouriteBooksComponent]
})
export class FavouriteBooksModule {}
