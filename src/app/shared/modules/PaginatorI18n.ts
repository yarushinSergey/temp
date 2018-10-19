import { MatPaginatorIntl } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

export class PaginatorI18n extends MatPaginatorIntl {

  constructor(private readonly translate: TranslateService) {
    super();

    this.translate.onLangChange.subscribe((e: Event) => {
      this.getAndInitTranslations();
    });
    this.getAndInitTranslations();
  }

  getAndInitTranslations() {
      this.itemsPerPageLabel = this.translate.instant('Paginator.ItemsPerPage');
      this.changes.next();
  }

  getRangeLabel = (page: number, pageSize: number, length: number) =>  {
    if (length === 0 || pageSize === 0) {
      return `0 / ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} / ${length}`;
  }
}
