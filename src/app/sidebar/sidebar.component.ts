import { Component } from '@angular/core';
import { SharedService } from '../providers/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {

  menuList = [
    {
      name: 'Home',
      value: 'Home',
      link: ''
    },
    {
      name: 'Users',
      value: 'Users',
      link: '/users'
    },
    {
      name: 'Blogs',
      value: 'Blogs',
      link: ""
    }
]
  menuItemsSelected: string = 'Home';

  constructor(private sharedService: SharedService, private router: Router){
    this.sharedService.menuSelected.next(this.menuItemsSelected);
  }

  /**
   * function to change menuItemsSelected by user
   * @param menuItem 
   */
  changeMenuItem(menuItem: string){
    this.menuItemsSelected = menuItem;
    this.sharedService.menuSelected.next(menuItem);
    const menuLink = this.menuList.find(item => item.name === menuItem)?.link;
    this.router.navigate([menuLink]);
  }
}
