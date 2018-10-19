import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { BookService } from './shared/books/book.service';
import { NgxTranslateModule } from './shared/modules/translate.module';
import { LibraryStorageService } from './shared/library-storage.service';
import { MatPaginatorIntl } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { PaginatorI18n } from './shared/modules/PaginatorI18n';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule,
    NgxTranslateModule
  ],
  providers: [
    BookService,
    LibraryStorageService,
    {
      provide: MatPaginatorIntl, deps: [TranslateService],
      useClass: PaginatorI18n
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
