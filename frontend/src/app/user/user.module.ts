import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserViewComponent } from './user-view/user-view.component';

@NgModule({
  declarations: [UserComponent, UserFormComponent, UserViewComponent],
  imports: [CommonModule, UserRoutingModule],
  exports: [UserComponent],
})
export class UserModule {}
