import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  @Input() color:boolean;
  cl:string;
  
    constructor() { }
  
    ngOnInit() {
    }
  
    ngOnChanges(){
        if(this.color == true)
          this.cl = "black";
        else 
          this.cl = "red";
    }
}
