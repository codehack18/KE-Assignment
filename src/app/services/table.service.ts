import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  
  private apiUrl="http://localhost:3000/tableList";

  
  constructor( private http:HttpClient) { }


  getTable() {
    return this.http.get(this.apiUrl);
  };

  deleteList(id:any){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

 
}

