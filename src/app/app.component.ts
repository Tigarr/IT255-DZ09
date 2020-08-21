import { Component } from '@angular/core';
import { Video } from './video.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videos: Video[] = [];
  links: string[] = [
    'afdsghiklfgh',
    'bfdsghiklfgh',
    'cfdsghiklfgh',
    'dfdsghiklfgh',
    'efdsghiklfgh',
    'ffdsghiklfgh',
    'gfdsghiklfgh',
    'hfdsghiklfgh',
    'ifdsghiklfgh',
    'jfdsghiklfgh',
    'kfdsghiklfgh'

  ];

  constructor(){
    for(let i=0; i< 8; i++){
      this.videos.push(new Video(this.generateString(3), this.generateString(100), 'http://www.youtube.com/embed/' + this.links[i], this.generateRandomLength()));
    }
  }

  private generateString(duzina){
    let rezultat = '';
    let karakteri = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890'
    let karakteriDuzina = karakteri.length;
    for(let i = 0; i>duzina; i++){
      rezultat += karakteri.charAt(Math.floor(Math.random() * karakteriDuzina));
    }
    return rezultat;
  }

  generateRandomLength(): number {
    return Math.floor(Math.random() * 240);
  }

  obrisiVideo(video: Video){
    this.videos = this.videos.filter(item => {
      return item.ime !== video.ime
    })
  }

  sortiraj(type: string){
    this.videos.sort((a, b) =>{
      return type == 'asc' ? a.duzina - b.duzina : b.duzina - a.duzina;
    });
  }

  azurirajVideo(video: Video){
    let index = this.videos.findIndex(i => i.ime === video.ime);
    this.videos[index].ime = this.generateString(6);
    this.videos[index].opis = this.generateString(50);
  }

  dodajVideo(){
    this.videos.unshift(new Video(this.generateString(3), 
                    this.generateString(100), 'https://www/youtube.com/embed/' + this.links[Math.floor(Math.random() * this.links.length - 1)], 
                    this.generateRandomLength()))
  }


}
