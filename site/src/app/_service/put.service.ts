import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PutService {

  constructor(private http: HttpClient) { }

  PostItems(path: String, id: String, obj: Object) {
    return this.http.put(`https://localhost:7185/api/${path}/${id}`, obj);
  }
}
