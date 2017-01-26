import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  public imgToBase64(src, callback, outputFormat?) {
    let img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = src;
    if (img.complete || img.complete === undefined) {
      img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      img.src = src;
    }
    img.onload = function () {
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      let dataURL;
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img, 0, 0);
      dataURL = canvas.toDataURL(outputFormat);
      callback(dataURL);
    };
  }

}
