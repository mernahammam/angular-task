import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
data : any;
  constructor(private HTTP: HttpClient) { }
  getUsersList(): Observable<any>{
   return this.HTTP.get('https://www.googleapis.com/books/v1/volumes',{
     params:{q:this.data}
   })

  }
  setdata(event){
    console.log(event);
    
    this.data=event;
  }
}