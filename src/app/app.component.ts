import { Component } from '@angular/core';
import { ServicesService} from './services.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskday3';
  data: any;
  name: any;
  constructor(private userservice: ServicesService){}

  ngOnInit(): void {
  }

  handlesearch(){
    this.name=document.getElementById('usersearch');
    this.name=this.name.value;
    this.userservice.setdata(this.name);

    this.userservice.getUsersList().subscribe({
      next: (data) => {
        data['items'].forEach(element => {
          console.log(element.volumeInfo.title);
        });
        this.data=data['items']; 
      },
      error: (msg) => {
        console.log('error',msg);
      }
    })

  }
}
