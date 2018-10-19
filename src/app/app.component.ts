import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LibraryStorageService } from './shared/library-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openlibrary';

  constructor(translate: TranslateService,
              private ls: LibraryStorageService) {
    const lang = this.ls.getLangFromStorage();
    if (lang) {
      translate.setDefaultLang(lang);
      translate.use(lang);
    } else {
      translate.setDefaultLang('ru');
      translate.use('ru');
    }
    translate.onLangChange.subscribe(event => {
      this.ls.storageLang(event.lang);
    });
  }
}
