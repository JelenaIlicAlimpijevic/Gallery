import { Component, EventEmitter, Output } from '@angular/core';
import { Gallery } from '../../../shared/models/gallery.model';
import { GalleryService } from '../../../shared/services/gallery.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-gallery',
  templateUrl: './create-gallery.component.html',
  styleUrls: ['./create-gallery.component.css']
})
export class CreateGalleryComponent {

  @Output() onSubmit = new EventEmitter<Gallery>();

  private newGallery: Gallery=new Gallery();

  constructor(private galleryService:GalleryService,
  			private router :Router	) {

  
  }

  submitGallery(gallery: Gallery) {
    this.galleryService.addGallery(gallery);
  			this.router.navigateByUrl('/');
  			
  }


}
