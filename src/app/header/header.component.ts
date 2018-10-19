import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private hideRows = true;

  constructor(private translate: TranslateService,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'flag-ru',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/flagru.svg'));
    iconRegistry.addSvgIcon(
      'flag-us',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/flagus.svg'));
  }
  ngOnInit() {
  }

  menu() {
    this.hideRows = !this.hideRows;
  }

}
