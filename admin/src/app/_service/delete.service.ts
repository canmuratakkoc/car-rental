import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) { }

  DeleteItem(path: String, id: String) {
    return this.http.delete(`https://localhost:7185/api/${path}/${id}`);
  }
}
