import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ScoreComponent } from './score/score.component';
import { GameComponent } from './game/game.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';

import { from } from 'rxjs';

const routes: Routes = [

{path:'home',component:HomeComponent},

{path:'score',component:ScoreComponent},
{path:'player-details',component:PlayerDetailsComponent},
{path:'game',component:GameComponent},
{path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
