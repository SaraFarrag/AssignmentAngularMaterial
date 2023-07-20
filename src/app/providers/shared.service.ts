import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public menuSelected = new BehaviorSubject('');
  public menuItemSelected = this.menuSelected.asObservable();

  
  constructor() { 
  }
}
