import { UserViewComponent } from './user-view/user-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserViewComponent,
  },
  {
    path: 'new',
    component: UserFormComponent,
  },
  {
    path: ':id',
    component: UserComponent,
  },
  {
    path: ':id/update',
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
