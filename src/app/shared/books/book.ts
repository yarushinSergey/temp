export class Book {
    readonly isbn: string;
    readonly title: string;
    readonly subtitle: string;
    readonly cover: string[];
    readonly publish_date: string;
    readonly authors: string[];
    readonly authorsList: string;
    readonly publishers: string[];
    readonly publishersList: string;
    readonly subjects: string[];
    readonly subjectsList: string;
    readonly weight: string;

    readonly tagList: string[];

    getIsbn(): string {
        return this.isbn;
    }

    getTitle(): string {
        return this.title;
    }

    getSubtitle(): string {
        return this.subtitle;
    }

    getCover(): string[] {
        return this.cover;
    }

    getPublishDate(): string {
        return this.publish_date;
    }

    getAuthors(): string[] {
        return this.authors;
    }

    getPublishers(): string[] {
        return this.publishers;
    }

    getSubjects(): string[] {
        return this.subjects;
    }

    getWeight(): string {
        return this.weight;
    }

    getAuthorsList(): string {
        return this.authorsList;
    }

    getPublishersList(): string {
        return this.publishersList;
    }

    getSubjectsList(): string {
        return this.subjectsList;
    }

    getTagList(): string[] {
      return this.tagList;
    }

    constructor (key: string, data: Object) {
        this.isbn = key;
        this.title = data['title'];
        this.subtitle = data.hasOwnProperty('subtitle') ? data['subtitle'] : '';
        this.cover = data.hasOwnProperty('cover') ? data['cover'] : [];
        this.publish_date = data.hasOwnProperty('publish_date') ? data['publish_date'] : '';
        this.weight = data.hasOwnProperty('weight') ? data['weight'] : '';
        this.tagList = data.hasOwnProperty('tagList') ? data['tagList'] : [];

        if (data.hasOwnProperty('authorsList')) {
          this.authors = data['authors'];
          this.authorsList = data['authorsList'];
          this.publishers = data['publishers'];
          this.publishersList = data['publishersList'];
          this.subjects = data['subjects'];
          this.subjectsList = data['subjectsList'];
        } else {
          if (data.hasOwnProperty('authors')) {
            this.authors = data['authors'].map(this.getObjectName);
          } else { this.authors = []; }


          if (data.hasOwnProperty('publishers')) {
            this.publishers = data['publishers'].map(this.getObjectName);
          } else { this.publishers = []; }


          if (data.hasOwnProperty('subjects')) {
            data['subjects'].length = data['subjects'].length > 5 ? 5 : data['subjects'].length;
            this.subjects = data['subjects'].map(this.getObjectName);
          } else { this.subjects = []; }

          this.authorsList = this.authors.join(', ');
          this.publishersList = this.publishers.join(', ');
          this.subjectsList = this.subjects.join(', ');
        }
    }

    private getObjectName(e) {
        return e.name;
    }
}
