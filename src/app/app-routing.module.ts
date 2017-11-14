import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryResolver } from './shared/resolver/gallery.resolver';

import { AuthGuard } from './shared/guards/auth.guard';
import { GuestGuard } from './shared/guards/guest.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { CreateGalleryComponent } from './components/galleries/create-gallery/create-gallery.component';
import { GalleryDetailsComponent } from './components/galleries/gallery-details/gallery-details.component';



const appRoutes: Routes = [
  {
    path: '',
    component: GalleriesComponent
  },
  {
        path: 'galleries/:id',
        component: GalleryDetailsComponent
    },

  {
    path: 'login',
    canActivate: [GuestGuard],
    component: LoginComponent
  },
  {
    path: 'register',
    canActivate: [GuestGuard],
    component: RegisterComponent
  },
  {
    path: 'create',
    canActivate: [AuthGuard],
    component: CreateGalleryComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
