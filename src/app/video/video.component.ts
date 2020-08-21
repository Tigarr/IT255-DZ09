import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Video } from '../video.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Output() brisanjeVideo: EventEmitter<Video> = new EventEmitter();
  @Output() azuriranjeVideo: EventEmitter<Video> = new EventEmitter();
  @Input() video: any;
  public link: any;
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(){
    this.embedUrl();
  }
  embedUrl(){
    this.link = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.link);
  }
  obrisiVideo(){
    this.brisanjeVideo.emit(this.video);
  }
  azurirajVideo(){
    this.azuriranjeVideo.emit(this.video);
}

}
