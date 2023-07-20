import { Component } from '@angular/core';
import { SharedService } from '../providers/shared.service';

@Component({
  selector: 'app-menu-description',
  templateUrl: './menu-description.component.html',
  styleUrls: ['./menu-description.component.sass']
})
export class MenuDescriptionComponent {
  
  menuItemSelected:string ='';

  constructor(private sharedService: SharedService){
  }

  ngOnInit(){
    this.sharedService.menuItemSelected.subscribe((menuItem) => this.menuItemSelected = menuItem);    
  }
}
