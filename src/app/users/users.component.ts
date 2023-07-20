import { Component, ViewChild } from '@angular/core';
import { UserService } from '../providers/user.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent {
  
  displayedColumns: string[] = ['name', 'phone', 'email'];
  dataSource: any[] = [];
  pageSize = 3;
  resultsLength = 0;
  startIndex = 0;
  endIndex = this.pageSize;
  userData:any;

  constructor(private userService: UserService){
  }

  ngOnInit(){

    //get users data 
    this.userService.getUsers().subscribe( (data) =>{
      if(data){
        this.userData = data;
        this.dataSource = data.slice(this.startIndex, this.endIndex);
        this.resultsLength = data.length;
      }
    });
  }

  /**
   * 
   * @param event pagination event
   * function to update data in table according to page index
   */
  onPaginate(event: any){
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex =  this.startIndex + event.pageSize;

    this.dataSource = this.userData.slice(this.startIndex, this.endIndex);
    
  }

}
