import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gallery } from './../models/gallery.model';
import { Observable, Observer } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class GalleryService {

  private galleries: Gallery[] = [];

  constructor(private http: HttpClient,
              private authService: AuthService) { }

public getGallery(){
    
  return new Observable((o: Observer<any>) => {
      this.http.get('http://localhost:8000/api/galleries', {
        headers: this.authService.getRequestHeaders(),
      })
        .subscribe(
          (galleries: any[]) => {
            galleries.forEach(c => {
              this.galleries.push(new Gallery(c.id, c.name, c.description, c.imageUrl, c.createdBy ));
            });

            o.next(this.galleries);
            return o.complete();
          }
        );
    });
  }



  public addGallery(gallery: Gallery)
  { 
     
      this.http.post('http://localhost:8000/api/galleries', {
        'name': gallery.name,
        'description': gallery.description,
        'imageUrl': gallery.imageUrl
      },
      {
        headers: this.authService.getRequestHeaders(),
      })
        .subscribe(
          (g: any) => {
            let newG = new Gallery(g.id, g.name, g.description, g.imageUrl, g.createdBy);
            this.galleries.push(newG);
            
          }
        );
    
  }

  public editGallery(gallery: Gallery)
  {
    return new Observable((o: Observer<any>) => {
      this.http.put('http://localhost:8000/api/galleries/' + gallery.id, {
        'name': gallery.name,
        'description': gallery.description,
        'imageUrl': gallery.imageUrl,
      },
      {
        headers: this.authService.getRequestHeaders(),
      })
        .subscribe(
          (gallery: any) => {
            let existing = this.galleries.filter(c => c.id == gallery.id);
            if (existing.length) {
              existing[0].name = gallery.name;
              existing[0].description = gallery.description;
              existing[0].imageUrl = gallery.imageUrl;
            }

            o.next(existing[0]);
            return o.complete();
          }
        );
    });
  }

  public removeGallery(gallery: Gallery)
  {
    return new Observable((o: Observer<any>) => {
      this.http.delete('http://localhost:8000/api/galleries/' + gallery.id,
        {
          headers: this.authService.getRequestHeaders(),
        })
        .subscribe(
          () => {
            const index = this.galleries.indexOf(gallery);
            this.galleries.splice(index, 1);

            o.next(index);
            return o.complete();
          }
        );
    });
  }

  public getGalleryById(id: number)
  {
    return new Observable((o: Observer<any>) => { 
      this.http.get('http://localhost:8000/api/galleries/' + id,
        {
          headers: this.authService.getRequestHeaders(),
        })
        .subscribe(
          (gallery: any) => {
            o.next(new Gallery(gallery.id, gallery.name, gallery.description, gallery.imageUrl));
            return o.complete();
          }
        );
    });
  }


}