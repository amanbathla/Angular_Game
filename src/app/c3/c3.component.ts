import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

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
