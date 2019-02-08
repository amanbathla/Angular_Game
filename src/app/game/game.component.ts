import { Component, OnInit,ViewChild,AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient }    from '@angular/common/http';
import { player } from '../player-details/player';
import { timer } from 'rxjs';
import { template } from '@angular/core/src/render3';
import { PlayerNameService } from '../player-name.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']


})
export class GameComponent implements OnInit {



  timeLeft: number = 30;
  score:number = 0;
  interval;
  clolor;
  timeSpeed = 1000;

// idArray = ["1","2","3","4"];
  c1:boolean = false;
  c2:boolean = false;
  c3:boolean = false;
  c4:boolean = false;

  constructor(private http:HttpClient,private router: Router,private _playerName:PlayerNameService) {}


  ngOnInit() {
    
     this.startTimer(this.timeSpeed);
  }

  startTimer(timeSpeed:any) {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
              this.timeLeft--;
              this.randomInter();
              // if(this.timeLeft % 2 == 0){
                   
              //         }
              // else{}
      } 
      else {
        clearInterval(this.interval);
          this.postData()
          
         

      }
    },timeSpeed)
  }


  //Mouse Enter 

  randomInter(){

    this.c1=false;
    this.c2=false;
    this.c3=false;
    this.c4=false;
 
    let number = Math.floor(Math.random() * 4 + 1 );
 
    console.log(number);
    if(number==1)
    {
      this.c1=true;
 
    }
    else if(number==2)
    {
      this.c2=true;
    }
    else if( number==3)
    {
      this.c3=true;
    }
    else
    {
      this.c4=true;
    }
    // let number = 
    // Math.floor(Math.random() * 4 + 1 );

    // console.log(number);
    
    // let element = document.getElementById(String(number));

    // let index = this.idArray.indexOf(element.id)

    //   for(let i = 0;i < this.idArray.length;i++){
    //        if(i == index){
    //              element.style.backgroundColor = "black";
    //         }
    //         else{
    //                let element = document.getElementById(this.idArray[i]);
    //                 element.style.backgroundColor = "red";
    //   }
    // }
 
  }

  //Check for click component 

  clickComponent(x:boolean){
  
        if(x)
            this.score += 10;
          
        
        if(this.score < 30){
          return
        }

        if(this.score > 30 && this.score < 50){
          this.timeSpeed = 800;

        }
        else if(this.score < 80){
          this.timeSpeed = 700;
        }
        else if(this.score < 110){
          this.timeSpeed = 600;
        }
        else if(this.score < 150){
          this.timeSpeed = 500;
        }
        else if(this.score < 200 ){
          this.timeSpeed = 400; 
        }
      
        clearInterval(this.interval);
        this.startTimer(this.timeSpeed);
      


    // let element = document.getElementById(id);

    // let bgColor = element.style.backgroundColor;
    // if(bgColor == "black"){
    //   this.score = this.score + 10;
    // }
    // else{

    // }


    // if(this.score > 30){

    //   this.time = 1;
    // }
    
     this.randomInter();
      
  }

  //Send the data to server

  postData(){
    this._playerName.score = this.score
    
    let playerDetail: player = {
      name:this._playerName.playerName,
      score:this.score
    
    };


    return this.http
    .post("http://localhost:3006/posts", 
      playerDetail
    )
    .subscribe((data: any) => {
      console.log(data)
      this.router.navigate(['score']);
    },
    err => {
      window.alert(err.message);
        //handle errors here
    })
  }
  

  

}
