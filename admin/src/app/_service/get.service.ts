import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { brands } from '../_model/brands/brands';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http: HttpClient) { }

  LoadItems(path: String) {
    return this.http.get<brands[]>(`https://localhost:7185/api/${path}`);
  }
}
