import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth.service';
import { GalleryService } from './shared/services/gallery.service';
import { CommentService } from './shared/services/comment.service';

import { GalleryResolver } from './shared/resolver/gallery.resolver';

import { AuthGuard } from './shared/guards/auth.guard';
import { GuestGuard } from './shared/guards/guest.guard';


import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { MyGalleriesComponent } from './components/galleries/my-galleries/my-galleries.component';
import { CreateGalleryComponent } from './components/galleries/create-gallery/create-gallery.component';
import { GalleryBoxComponent } from './components/galleries/gallery-box/gallery-box.component';
import { GalleryDetailsComponent } from './components/galleries/gallery-details/gallery-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    GalleriesComponent,
    MyGalleriesComponent,
    CreateGalleryComponent,
    GalleryBoxComponent,
    GalleryDetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  

  ],
  providers: [AuthService,
              GalleryService,
              AuthGuard,
              GuestGuard,
              GalleryResolver,
              CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
