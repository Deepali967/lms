import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/home/home.module').then((h) => h.HomeModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./components/home/home.module').then((h) => h.HomeModule),
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('./components/user-profile/user-profile.module').then(
            (u) => u.UserProfileModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
