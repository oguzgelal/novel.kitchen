import { ColorCodes } from '../enum/colorCodes';

export class Book {
    title: string;
    author: string;
    color: string;

    constructor(options?: any) {
      this.title = options.title ? options.title : '';
      this.author =  options.author ? options.author : '';
      this.color = options.color ? ColorCodes[options.color] : <any>ColorCodes.default;
    }
}
