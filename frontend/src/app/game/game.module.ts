import { GameRoutingModule } from './game-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameReadComponent } from './game-read/game-read.component';
import { GameCreateComponent } from './game-create/game-create.component';
import { GameDeleteComponent } from './game-delete/game-delete.component';
import { GameUpdateComponent } from './game-update/game-update.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GameCrudComponent } from './game-crud/game-crud.component';

@NgModule({
  declarations: [
    GameReadComponent,
    GameCreateComponent,
    GameDeleteComponent,
    GameUpdateComponent,
    GameCrudComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    GameRoutingModule,
  ],
  exports: [],
})
export class GameModule {}
