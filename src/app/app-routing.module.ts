import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', children: [
      { path: '', loadChildren: './home/home.module#HomeModule' },
      { path: 'details/:id', loadChildren: './details/details.module#DetailsModule' },
    ] },
  { path: 'favourite', loadChildren: './favourite-books/favourite-books.module#FavouriteBooksModule' },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
