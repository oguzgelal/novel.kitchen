import { Injectable } from '@angular/core';
import { ColorCodes } from '../enum/colorCodes';

@Injectable()
export class Book {
    title: string;
    author: string;
    color: string;

    constructor(options?: any) {
      this.title = (options && options.title) ? options.title : '';
      this.author =  (options && options.author) ? options.author : '';
      this.color = (options && options.color) ? ColorCodes[options.color] : <any>ColorCodes.default;
    }
}
