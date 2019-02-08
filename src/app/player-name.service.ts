import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerNameService {

 playerName:string = "";
 score:number = 0;
  constructor() { }
}
