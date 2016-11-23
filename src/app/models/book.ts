export class Book {
    title: string;
    author: string;

    constructor(options?: any) {
      this.title = options.title ? options.title : '';
      this.author =  options.author ? options.author : '';
    }
}
