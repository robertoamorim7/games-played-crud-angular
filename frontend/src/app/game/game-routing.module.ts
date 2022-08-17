import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameCrudComponent } from './game-crud/game-crud.component';
import { GameCreateComponent } from './game-create/game-create.component';
import { GameUpdateComponent } from './game-update/game-update.component';
import { GameDeleteComponent } from './game-delete/game-delete.component';

const routes: Routes = [
  {
    path: '',
    component: GameCrudComponent,
  },
  {
    path: 'create',
    component: GameCreateComponent,
  },
  {
    path: 'update/:id',
    component: GameUpdateComponent,
  },
  {
    path: 'delete/:id',
    component: GameDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
