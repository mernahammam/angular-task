import { Component, OnInit } from '@angular/core';
// import {ServicesService} from "../services.service";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    // private ServicesService: ServicesService
    ) { }

  ngOnInit(): void {
    // this.ServicesService.getUsersList();
  }

}
