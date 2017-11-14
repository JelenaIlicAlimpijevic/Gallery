import { Component, Injector } from '@angular/core';
import { GalleryService } from '../../shared/services/gallery.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Gallery } from '../../shared/models/gallery.model';


@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css']
})
export class GalleriesComponent {

   private galleries: any[] = [];
  private galleryService : GalleryService;

  constructor(private injector: Injector) {
    this.galleryService = this.injector.get(GalleryService);
    this.galleryService.getGallery().subscribe(
      data => {
        this.galleries = data;

      },
      (err: HttpErrorResponse) => {
        alert(`Backend returned code ${err.status} with message: ${err.error}`);
      }
    );
  }

  remove(gallery) {
    this.galleryService.removeGallery(gallery)
        .subscribe();
  }

  submitGallery(gallery: Gallery) {
    if (gallery.id) {
      this.galleryService.editGallery(gallery)
        .subscribe();
    } else {
      this.galleryService.addGallery(gallery)
    }
  }


}
