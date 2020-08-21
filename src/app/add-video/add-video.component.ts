import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Video } from '../video.model';
import {FormGroup, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  
  @Output() dodajVideo: EventEmitter<Video> = new EventEmitter();
  videoForma: FormGroup;


  constructor() { 
    
  }

  ngOnInit(): void {
    this.initForma();
  }

  initForma(){
    this.videoForma = new FormGroup({
      ime: new FormControl('', [
        Validators.required
      ]),
      link: new FormControl('', [
        Validators.required
      ]),
      opis: new FormControl('',[
        Validators.required
      ])
    });
  }

  submitForma(){
    let ime = this.videoForma.get('ime').value;
    let link = this.videoForma.get('link').value;
    let opis = this.videoForma.get('opis').value;
    let duzina = this.videoForma.get('duzina').value;
    let video = new Video(ime, opis, link, duzina);
    this.dodajVideo.emit(video);
  }
}
