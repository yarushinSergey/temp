import { NgModule } from '@angular/core';

import {
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatListModule,
    MatGridListModule,
    MatChipsModule,
    MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatPaginatorModule,
    MatGridListModule,
    MatChipsModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatPaginatorModule,
    MatGridListModule,
    MatChipsModule,
    MatCardModule
  ]
})

export class MaterialModule {}
