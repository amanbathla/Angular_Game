import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
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
