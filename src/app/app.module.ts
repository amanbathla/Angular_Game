import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { GameComponent } from './game/game.component';
import { ScoreComponent } from './score/score.component';
import { HttpClientModule }    from '@angular/common/http';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { PlayerNameService } from './player-name.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerDetailsComponent,
    GameComponent,
    ScoreComponent,
    C1Component,
    C2Component,
    C3Component,
    C4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PlayerNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
