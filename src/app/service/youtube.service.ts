import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor() { }

  getEmbedLink(link){
    let id='';
    link = link.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if(link[2] !== undefined){
      id = link[2].split(/[^0-9a-z_\-]/i));
      id = id[0];
    }else {
      id = link;
    }
    return 'http://www.youtube.com/embed/' + id;
  }
}
