import { Component, OnInit } from '@angular/core';
import { PlayerNameService } from '../player-name.service';
import { Router } from '@angular/router';
import { _ParseAST } from '@angular/compiler';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {


  constructor(private router: Router, private _playerName:PlayerNameService) { }

  ngOnInit() {
  }
 
  onClick(value:string):any{
    

    if(value.trim().length === 0){
      window.alert('Please Enter a valid name');
    }
    else{
      this._playerName.playerName = value;
      this.router.navigate(['game']);
    }
  

  
  }


}
