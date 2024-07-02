import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  PostItems(path: String, obj: Object) {
    return this.http.post(`https://localhost:7185/api/${path}`, obj);
  }
}
