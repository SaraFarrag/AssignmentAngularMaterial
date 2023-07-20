import { Component, OnInit } from '@angular/core';
import { SharedService } from '../providers/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent  {
  summaryItems =["hello", "Hello", "hello", "hello"];

}
