import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http: HttpClient) { }

  LoadItems(path: String) {
    return this.http.get<[]>(`https://localhost:7185/api/${path}`);
  }
}
