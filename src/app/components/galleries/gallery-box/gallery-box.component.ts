import { Component, Input, EventEmitter, Output, SimpleChange } from '@angular/core';
import { Gallery } from '../../../shared/models/gallery.model';
import { GalleryService } from '../../../shared/services/gallery.service';

@Component({
  selector: '[galleryBox]',
  templateUrl: './gallery-box.component.html',
  styleUrls: ['./gallery-box.component.css']
})
export class GalleryBoxComponent  {

	private gallery: Gallery;


  constructor() { }

  @Input()
  set galleryBox(gallery: Gallery) {
    this.gallery = gallery;
  }

  @Output() onEdit = new EventEmitter<Gallery>();
  @Output() onRemove = new EventEmitter<Gallery>();


  edit(gallery: Gallery) {
    this.onEdit.emit(gallery);
  }

  remove(gallery: Gallery) {
    this.onRemove.emit(gallery);
  }

   
}