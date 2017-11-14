import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../../shared/models/gallery.model';
import { GalleryService } from '../../../shared/services/gallery.service';
import { CommentService } from '../../../shared/services/comment.service';
import { Comment } from '../../../shared/models/comment.model';



@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.css']
})
export class GalleryDetailsComponent implements OnInit {

  private gallery: Gallery;

  constructor(private route: ActivatedRoute,
              private galleryService: GalleryService,
              private commentService: CommentService
              ) {
  }

  submitComment(comment: Comment, id:number) {
    this.commentService.addComment(comment,id);
        
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: {gallery : Gallery}) => {
        this.gallery = data;
       
      });
  }


}
