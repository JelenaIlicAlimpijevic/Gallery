import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gallery } from './../models/gallery.model';
import { Observable, Observer } from 'rxjs';
import { AuthService } from './auth.service';
import { Comment } from './../models/comment.model';


@Injectable()
export class CommentService {

  private comments: Comment[] = [];

	constructor(private http: HttpClient,
              private authService: AuthService) {
              }

  public addComment(comment: Comment, id:number)
  { 
     
      this.http.post('http://localhost:8000/api/galleries' + id + '/comments', {
        'content': comment.content,
        'gallery_id': id
        
      },
      {
        headers: this.authService.getRequestHeaders(),
      })
        .subscribe(
          (k: any) => {
            let newC = new Comment(k.id, k.content, k.user_id, k.gallery_id);
            this.comments.push(newC);
            
          }
        );
  }

}
