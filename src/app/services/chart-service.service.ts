import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {

  
  constructor(private http: HttpClient) { }


showproject(){
      return this.http.get('http://localhost:3000/chartdata');
}


}