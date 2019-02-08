import { Component, OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Router } from '@angular/router';
import { PlayerNameService } from '../player-name.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})

export class ScoreComponent implements OnInit {

  
  allUserScore = [];
  name = this._playerName.playerName;
  score  = this._playerName.score;

  constructor(private router: Router,private http:HttpClient, private _playerName:PlayerNameService) { }

  ngOnInit() {
   
    return this.http.get('http://localhost:3006/posts').subscribe((data: any) => {

      this.allUserScore=data;
      this.allUserScore.sort((a,b) => b.score - a.score);
     
    },
    err => {
      window.alert(err);
        //handle errors here
    })
  }


  //restrt Game on Button Click

  restartGame(){
    this.router.navigate(['/player-details']);
  }





}
